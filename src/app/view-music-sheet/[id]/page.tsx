"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Slider } from "@/src/components/ui/slider";
import { Loader } from "lucide-react";
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import * as Tone from "tone";
import JSZip from "jszip";

export default function MusicSheetViewer() {
  const params = useParams();
  const id = params.id as string;
  const [sheetData, setSheetData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [osmd, setOsmd] = useState<OpenSheetMusicDisplay | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(-6);
  const [bpm, setBpm] = useState(90);
  const [currentMeasure, setCurrentMeasure] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const xmlContentRef = useRef<string | null>(null);
  const notesRef = useRef<
    { pitch?: string; rest: boolean; duration: number; measure: number }[]
  >([]);
  const synthRef = useRef<Tone.PolySynth | null>(null);

  useEffect(() => {
    const fetchSheet = async () => {
      try {
        const res = await fetch(`/api/musicsheets/${id}`);
        const data = await res.json();
        setSheetData(data);
      } catch (err) {
        console.error("Erro ao carregar partitura:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSheet();
  }, [id]);

  useEffect(() => {
    const loadXML = async () => {
      if (sheetData?.fileXML && containerRef.current) {
        try {
          const response = await fetch(sheetData.fileXML);
          if (!response.ok) throw new Error("Arquivo não encontrado");

          const isMXL = sheetData.fileXML.toLowerCase().endsWith(".mxl");
          const osmdInstance = new OpenSheetMusicDisplay(containerRef.current, {
            backend: "svg",
            drawTitle: true,
            cursorsOptions: {
              type: 1,
              follow: true,
              color: "#00ff55",
            },
          });

          let xmlContent: string;

          if (isMXL) {
            const buffer = await response.arrayBuffer();
            const zip = await JSZip.loadAsync(buffer);
            const xmlFile = Object.values(zip.files).find((file) =>
              file.name.toLowerCase().endsWith(".xml")
            );
            if (!xmlFile) throw new Error("Nenhum .xml encontrado no .mxl");

            xmlContent = await xmlFile.async("text");
          } else {
            xmlContent = await response.text();
            if (!xmlContent.includes("<score-partwise")) {
              throw new Error("Arquivo XML inválido");
            }
          }

          xmlContentRef.current = xmlContent;
          await osmdInstance.load(xmlContent);
          await osmdInstance.render();

          try {
            osmdInstance.cursor?.reset();
            osmdInstance.cursor?.show();
          } catch (e) {
            console.warn("Erro ao exibir cursor:", e);
          }

          setOsmd(osmdInstance);
          extractNotes(xmlContent);
        } catch (err) {
          console.error("Erro ao renderizar partitura:", err);
        }
      }
    };

    if (sheetData?.fileXML) loadXML();
  }, [sheetData]);

  const extractNotes = (xml: string) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "application/xml");

    const divisionsNode = xmlDoc.querySelector("divisions");
    const divisions = divisionsNode ? parseInt(divisionsNode.textContent || "1") : 1;

    const measures = Array.from(xmlDoc.getElementsByTagName("measure"));
    const baseNotes: {
      pitch?: string;
      rest: boolean;
      duration: number;
      measure: number;
    }[][] = [];

    let repeatStartIndex = 0;
    let segnoIndex: number | null = null;
    let codaIndex: number | null = null;
    let fineIndex: number | null = null;
    let insertDaCapo = false;
    let insertDalSegno = false;
    let jumpToCoda = false;

    for (let i = 0; i < measures.length; i++) {
      const measure = measures[i];
      const notes: any[] = Array.from(measure.getElementsByTagName("note"));
      const measureNumber = parseInt(measure.getAttribute("number") || `${i + 1}`);
      const directionText = measure.querySelector("direction-type > words")?.textContent?.toLowerCase() || "";

      if (directionText.includes("segno")) segnoIndex = i;
      if (directionText.includes("coda")) codaIndex = i;
      if (directionText.includes("fine")) fineIndex = i;
      if (directionText.includes("da capo")) insertDaCapo = true;
      if (directionText.includes("dal segno")) insertDalSegno = true;
      if (directionText.includes("to coda")) jumpToCoda = true;

      const measureNotes: {
        pitch?: string;
        rest: boolean;
        duration: number;
        measure: number;
      }[] = [];

      const repeatForward = measure.querySelector('repeat[direction="forward"]');
      if (repeatForward) {
        repeatStartIndex = i;
      }

      for (const note of notes) {
        const isRest = note.getElementsByTagName("rest").length > 0;
        const durationRaw = parseInt(note.getElementsByTagName("duration")[0]?.textContent || "1");
        const durationQuarter = durationRaw / divisions;

        let pitch;
        if (!isRest) {
          const step = note.getElementsByTagName("step")[0]?.textContent || "";
          const octave = note.getElementsByTagName("octave")[0]?.textContent || "";
          const alter = note.getElementsByTagName("alter")[0]?.textContent;
          let accidental = "";
          if (alter === "1") accidental = "#";
          if (alter === "-1") accidental = "b";
          pitch = `${step}${accidental}${octave}`;
        }

        measureNotes.push({
          pitch,
          rest: isRest,
          duration: durationQuarter,
          measure: measureNumber,
        });
      }

      baseNotes.push(measureNotes);

      const repeatBackward = measure.querySelector('repeat[direction="backward"]');
      if (repeatBackward) {
        const repeatBlock = baseNotes.slice(repeatStartIndex, i + 1);
        baseNotes.push(...repeatBlock);
      }

      if (fineIndex === i) break;
    }

    let finalNotes = baseNotes.flat();

    if (insertDaCapo) {
      finalNotes = [...finalNotes, ...baseNotes.flat()];
    }

    if (insertDalSegno && segnoIndex !== null) {
      finalNotes = [...finalNotes, ...baseNotes.slice(segnoIndex).flat()];
    }

    if (jumpToCoda && codaIndex !== null) {
      finalNotes = [...finalNotes, ...baseNotes.slice(codaIndex).flat()];
    }

    notesRef.current = finalNotes;
  };

  const startPlayback = async () => {
    if (!osmd || !xmlContentRef.current) return;

    await Tone.start();

    if (!synthRef.current) {
      const synth = new Tone.PolySynth().toDestination();
      synth.volume.value = volume;
      synthRef.current = synth;
    }

    Tone.Transport.cancel();
    Tone.Transport.bpm.value = bpm;

    try {
      osmd.cursor?.reset();
      osmd.cursor?.show();
    } catch (e) {
      console.warn("Erro ao resetar cursor:", e);
    }

    const notes = notesRef.current;
    let now = Tone.now();
    let timeCursor = 0;

    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const durSec = (60 / bpm) * note.duration;

      Tone.Transport.scheduleOnce((t) => {
        if (!note.rest && note.pitch) {
          synthRef.current?.triggerAttackRelease(note.pitch, durSec, t);
        }

        setCurrentMeasure(note.measure);

        try {
          osmd.cursor?.next();
        } catch (e) {
          console.warn("Erro ao mover cursor:", e);
        }
      }, timeCursor);

      timeCursor += durSec;
    }

    Tone.Transport.scheduleOnce(() => {
      stopPlayback();
    }, timeCursor + 0.1);

    Tone.Transport.start();
    setIsPlaying(true);
  };

  const stopPlayback = () => {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    try {
      osmd?.cursor?.reset();
      osmd?.cursor?.show();
    } catch (e) {
      console.warn("Erro ao resetar cursor:", e);
    }
    setIsPlaying(false);
    setCurrentMeasure(null);
  };

  const togglePlayback = () => {
    isPlaying ? stopPlayback() : startPlayback();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-6 h-6 text-gray-500" />
        <span className="ml-2 text-gray-600">Carregando partitura...</span>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-semibold">{sheetData?.name}</h1>

      {sheetData?.fileXML ? (
        <div>
          <div ref={containerRef} className="border rounded p-2 bg-white shadow" />

          <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Button
              onClick={togglePlayback}
              className={isPlaying ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}
            >
              {isPlaying ? "Parar" : "Tocar"}
            </Button>

            <div className="text-sm text-gray-700">Compasso atual: {currentMeasure ?? "-"}</div>

            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Volume</label>
              <Slider
                min={-30}
                max={0}
                step={1}
                value={[volume]}
                onValueChange={(val) => {
                  setVolume(val[0]);
                  if (synthRef.current) synthRef.current.volume.value = val[0];
                }}
                className="w-40"
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">BPM</label>
              <Slider
                min={40}
                max={180}
                step={1}
                value={[bpm]}
                onValueChange={(val) => {
                  setBpm(val[0]);
                  Tone.Transport.bpm.value = val[0];
                }}
                className="w-40"
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Nenhum arquivo disponível para visualização.</p>
      )}
    </div>
  );
}
