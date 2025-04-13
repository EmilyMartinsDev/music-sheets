import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import { existsSync } from 'fs';

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file || file.type !== 'application/pdf') {
    return NextResponse.json({ error: 'Arquivo inválido. Envie um PDF.' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filename = file.name.replace(/\s/g, '_');
  const uniquePrefix = Date.now().toString();
  const safeFilename = `${uniquePrefix}_${filename}`;

  const inputDir = path.join(process.cwd(), 'input');
  const outputDir = path.join(process.cwd(), 'output');
  const inputPath = path.join(inputDir, safeFilename);

  // Garante que os diretórios existem
  if (!existsSync(inputDir)) await mkdir(inputDir, { recursive: true });
  if (!existsSync(outputDir)) await mkdir(outputDir, { recursive: true });

  // Salva o arquivo na pasta 'input'
  await writeFile(inputPath, buffer);

  const cmd = `docker compose run --rm --entrypoint "" audiveris /audiveris/Audiveris-5.3-alpha/bin/Audiveris -batch -export -output /output /input/${safeFilename}`;

  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error('Erro Audiveris:', stderr);
        resolve(
          NextResponse.json(
            { error: 'Erro ao processar o PDF', details: stderr.toString() },
            { status: 500 }
          )
        );
      } else {
        resolve(
          NextResponse.json({
            message: 'Processado com sucesso',
            arquivoEntrada: safeFilename,
            logs: stdout.toString(),
          })
        );
      }
    });
  });
};
