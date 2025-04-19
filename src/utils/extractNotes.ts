import { document } from 'musicxml-interfaces';
import { Note } from 'musicxml-interfaces/note-types';

export interface SheetMusicNote {
  pitch: string;       // Ex: "C4", "D#5"
  duration: string;    // Ex: "4n" (quarter note), "8n" (eighth note)
  velocity: number;    // 0-1
  startTime: number;   // Em segundos
}

export async function parseMusicXml(xmlData: ArrayBuffer): Promise<SheetMusicNote[]> {
  const xmlText = new TextDecoder().decode(xmlData);
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");
  
  // Verifica erros de parsing
  const parserErrors = xmlDoc.getElementsByTagName("parsererror");
  if (parserErrors.length > 0) {
    throw new Error("Erro ao parsear MusicXML");
  }

  const notes: SheetMusicNote[] = [];
  const allNotes = xmlDoc.getElementsByTagName("note");

  // Configuração de tempo (120 BPM padrão)
  const bpm = 120;
  const beatDuration = 60 / bpm; // Duração de uma semínima em segundos

  Array.from(allNotes).forEach((noteElement, index) => {
    const pitchElement = noteElement.getElementsByTagName("pitch")[0];
    if (!pitchElement) return; // Ignora notas sem pitch (pausas)

    const step = pitchElement.getElementsByTagName("step")[0]?.textContent || "C";
    const octave = pitchElement.getElementsByTagName("octave")[0]?.textContent || "4";
    const alter = pitchElement.getElementsByTagName("alter")[0]?.textContent;
    
    const durationElement = noteElement.getElementsByTagName("duration")[0];
    const duration = durationElement ? parseInt(durationElement.textContent || "1") : 1;

    // Formata a nota (ex: C#4)
    const pitch = `${step}${alter ? '#' : ''}${octave}`;
    
    // Converte duração para notação do Tone.js
    let toneDuration: string;
    if (duration >= 4) toneDuration = '1n';      // Nota inteira
    else if (duration >= 2) toneDuration = '2n'; // Meia nota
    else if (duration >= 1) toneDuration = '4n'; // Quarto de nota
    else if (duration >= 0.5) toneDuration = '8n';
    else toneDuration = '16n';

    notes.push({
      pitch,
      duration: toneDuration,
      velocity: 0.8,
      startTime: index * 0.5 // Timing simplificado
    });
  });

  return notes;
}