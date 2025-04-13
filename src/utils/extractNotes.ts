import { existsSync, readdirSync, readFileSync } from 'fs';
import path from 'path'; // Missing import
import { NextResponse } from 'next/server';
import AdmZip from 'adm-zip';
import { parseStringPromise } from 'xml2js';

export async function extrairNotasDeMXL(mxlPath: string) {
    const extractPath = mxlPath.replace('.mxl', '');
    const zip = new AdmZip(mxlPath);
    zip.extractAllTo(extractPath, true);

    const files = readdirSync(extractPath);
    const xmlFile = files.find((f) => f.endsWith('.xml'));

    if (!xmlFile) {
        return NextResponse.json({ error: 'XML não encontrado no MXL extraído.' }, { status: 500 });
    }

    const xmlContent = readFileSync(path.join(extractPath, xmlFile), 'utf-8');
    const parsed = await parseStringPromise(xmlContent);
    const notas: string[] = [];

    const pitchToNota: Record<string, string> = {
        C: 'DO', D: 'RÉ', E: 'MI', F: 'FÁ', G: 'SOL', A: 'LÁ', B: 'SI',
    };

    const partes = parsed['score-partwise']['part'];
    for (const parte of partes) {
        for (const medida of parte['measure']) {
            for (const elemento of medida['note']) {
                if (elemento['rest']) continue;
                const pitch = elemento['pitch']?.[0];
                if (pitch) {
                    const nota = pitchToNota[pitch['step'][0]];
                    if (nota) {
                        notas.push(nota);
                    }
                }
            }
        }
    }

    return notas;
}
