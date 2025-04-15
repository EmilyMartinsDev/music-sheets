// ⛔️ TROCAR TODO O ARQUIVO page.tsx por esse
"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Slider } from "@/src/components/ui/slider";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Label } from "@/src/components/ui/label";
import { Loader } from "lucide-react";
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import * as Tone from "tone";
import JSZip from "jszip";


interface Note {
  pitch?: string;
  rest: boolean;
  duration: number;
  measure: number;
}

export default function MusicSheetViewer() {
  const { id } = useParams();
  const [sheetData, setSheetData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [osmd, setOsmd] = useState<OpenSheetMusicDisplay | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(-6);
  const [bpm, setBpm] = useState(90);
  const [currentMeasure, setCurrentMeasure] = useState<number | null>(null);
  const [loopEnabled, setLoopEnabled] = useState(false);
  const [loopRange, setLoopRange] = useState<[number, number]>([1, 1]);
  const [maxMeasure, setMaxMeasure] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const xmlContentRef = useRef<string | null>(null);
  const notesRef = useRef<Note[]>([]);
  const synthRef = useRef<Tone.PolySynth | null>(null);

  // === FETCH PARTITURA ===
  useEffect(() => {
    const fetchSheetData = async () => {
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

    fetchSheetData();
  }, [id]);

  // === LOAD XML ===
  useEffect(() => {
    if (!sheetData?.fileXML || !containerRef.current) return;

    const loadScore = async () => {
      try {
        const xml = await getXMLContent(sheetData.fileXML);
        xmlContentRef.current = xml;

        if (!containerRef.current) {
          throw new Error("Container element is not available");
        }

        const osmdInstance = new OpenSheetMusicDisplay(containerRef.current, {
          backend: "svg",
          drawTitle: true,
          cursorsOptions: {
            type: 1,
            follow: true,
            color: "#00ff55",
          },
        });

        await osmdInstance.load(xml);
        containerRef.current.innerHTML = ""; // limpar render antigo
        await osmdInstance.render();
        osmdInstance.cursor?.reset();
        osmdInstance.cursor?.show();

        setOsmd(osmdInstance);
        parseNotes(xml);
      } catch (err) {
        console.error("Erro ao renderizar partitura:", err);
      }
    };

    loadScore();
  }, [sheetData]);

  const getXMLContent = async (fileURL: string): Promise<string> => {
    const response = await fetch(fileURL);
    if (!response.ok) throw new Error("Arquivo não encontrado");

    if (fileURL.toLowerCase().endsWith(".mxl")) {
      const buffer = await response.arrayBuffer();
      const zip = await JSZip.loadAsync(buffer);
      const xmlFile = Object.values(zip.files).find((file) =>
        file.name.toLowerCase().endsWith(".xml")
      );
      if (!xmlFile) throw new Error("Nenhum .xml encontrado dentro do .mxl");

      return await xmlFile.async("text");
    }

    const text = await response.text();
    if (!text.includes("<score-partwise")) {
      throw new Error("Documento XML inválido para MusicXML");
    }

    return text;
  };

  // === PARSE MUSICXML NOTES ===
  const parseNotes = (xml: string) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "application/xml");
    const divisions = parseInt(xmlDoc.querySelector("divisions")?.textContent || "1");

    const notes: Note[] = [];

    const measures = Array.from(xmlDoc.getElementsByTagName("measure"));
    for (const [index, measure] of measures.entries()) {
      const measureNumber = parseInt(measure.getAttribute("number") || `${index + 1}`);
      const noteEls = Array.from(measure.getElementsByTagName("note"));

      for (const noteEl of noteEls) {
        const isRest = noteEl.getElementsByTagName("rest").length > 0;
        const duration = parseInt(noteEl.getElementsByTagName("duration")[0]?.textContent || "1");
        const durationQuarter = duration / divisions;

        let pitch;
        if (!isRest) {
          const step = noteEl.getElementsByTagName("step")[0]?.textContent || "";
          const octave = noteEl.getElementsByTagName("octave")[0]?.textContent || "";
          const alter = noteEl.getElementsByTagName("alter")[0]?.textContent;
          const accidental = alter === "1" ? "#" : alter === "-1" ? "b" : "";
          pitch = `${step}${accidental}${octave}`;
        }

        notes.push({ pitch, rest: isRest, duration: durationQuarter, measure: measureNumber });
      }
    }

    notesRef.current = notes;
    const last = Math.max(...notes.map((n) => n.measure));
    setLoopRange([1, last]);
    setMaxMeasure(last);
  };

  // === PLAYBACK ===
  const startPlayback = useCallback(async () => {
    if (!osmd || !xmlContentRef.current) return;

    await Tone.start();

    if (!synthRef.current) {
      const synth = new Tone.PolySynth().toDestination();
      synth.volume.value = volume;
      synthRef.current = synth;
    }

    Tone.Transport.cancel();
    Tone.Transport.bpm.value = bpm;
    osmd.cursor?.reset();
    osmd.cursor?.show();

    const allNotes = notesRef.current;
    const [loopStart, loopEnd] = loopRange;
    const notes = loopEnabled
      ? allNotes.filter((n) => n.measure >= loopStart && n.measure <= loopEnd)
      : allNotes;

    let time = 0;
    for (const note of notes) {
      const dur = (60 / bpm) * note.duration;

      Tone.Transport.scheduleOnce((t) => {
        if (!note.rest && note.pitch) {
          synthRef.current?.triggerAttackRelease(note.pitch, dur, t);
        }
        setCurrentMeasure(note.measure);
        osmd.cursor?.next();
      }, time);

      time += dur;
    }

    const loop = () => {
      Tone.Transport.stop();
      startPlayback(); // recursivo se loop
    };

    Tone.Transport.scheduleOnce(loopEnabled ? loop : stopPlayback, time + 0.1);
    Tone.Transport.start();
    setIsPlaying(true);
  }, [osmd, loopEnabled, loopRange, bpm, volume]);

  const stopPlayback = () => {
    Tone.Transport.stop();
    Tone.Transport.cancel();
    osmd?.cursor?.reset();
    setIsPlaying(false);
    setCurrentMeasure(null);
  };

  const togglePlayback = () => (isPlaying ? stopPlayback() : startPlayback());

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-6 h-6 text-gray-500" />
        <span className="ml-2 text-gray-600">Carregando partitura...</span>
      </div>
    );
  }
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">{sheetData?.name}</h1>
  
      {sheetData?.fileXML ? (
        <>
          <div
            ref={containerRef}
            className="rounded-md border bg-white shadow-sm p-2 max-w-full overflow-auto"
          />
  
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* CONTROLE PRINCIPAL */}
            <div className="rounded-lg border p-4 shadow-sm space-y-4 bg-gray-50">
              <h2 className="font-semibold text-lg text-gray-700">Reprodução</h2>
  
              <Button
                onClick={togglePlayback}
                className={isPlaying ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}
              >
                {isPlaying ? "⏹ Parar" : "▶️ Tocar"}
              </Button>
  
              <div className="text-sm text-gray-600">
                Compasso atual:{" "}
                <span className="font-semibold text-gray-900">
                  {currentMeasure ?? "-"}
                </span>
              </div>
            </div>
  
            {/* CONTROLE DE ÁUDIO */}
            <div className="rounded-lg border p-4 shadow-sm space-y-4 bg-gray-50">
              <h2 className="font-semibold text-lg text-gray-700">Áudio</h2>
  
              <div className="space-y-2">
                <Label className="text-sm">Volume</Label>
                <Slider
                  min={-30}
                  max={0}
                  step={1}
                  value={[volume]}
                  onValueChange={(val) => {
                    setVolume(val[0]);
                    if (synthRef.current) synthRef.current.volume.value = val[0];
                  }}
                />
                <div className="text-xs text-muted-foreground pl-1">
                  {volume} dB
                </div>
              </div>
  
              <div className="space-y-2">
                <Label className="text-sm">BPM</Label>
                <Slider
                  min={40}
                  max={180}
                  step={1}
                  value={[bpm]}
                  onValueChange={(val) => {
                    setBpm(val[0]);
                    Tone.Transport.bpm.value = val[0];
                  }}
                />
                <div className="text-xs text-muted-foreground pl-1">{bpm} BPM</div>
              </div>
            </div>
  
            {/* CONTROLE DE LOOP */}
            <div className="rounded-lg border p-4 shadow-sm space-y-4 bg-gray-50">
              <h2 className="font-semibold text-lg text-gray-700">Loop</h2>
  
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="loop"
                  checked={loopEnabled}
                  onCheckedChange={(checked) => setLoopEnabled(!!checked)}
                />
                <Label htmlFor="loop">Ativar loop entre compassos</Label>
              </div>
  
              <div className="space-y-2">
                <Label className="text-sm">Compasso inicial</Label>
                <Slider
                  min={1}
                  max={maxMeasure}
                  step={1}
                  value={[loopRange[0]]}
                  onValueChange={(val) =>
                    setLoopRange(([_, end]) => [val[0], end])
                  }
                />
                <div className="text-xs pl-1">{loopRange[0]}</div>
              </div>
  
              <div className="space-y-2">
                <Label className="text-sm">Compasso final</Label>
                <Slider
                  min={1}
                  max={maxMeasure}
                  step={1}
                  value={[loopRange[1]]}
                  onValueChange={(val) =>
                    setLoopRange(([start]) => [start, val[0]])
                  }
                />
                <div className="text-xs pl-1">{loopRange[1]}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Nenhum arquivo disponível para visualização.</p>
      )}
    </div>
  );
  
}
