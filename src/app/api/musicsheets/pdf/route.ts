import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const fileUrl = body.pdfUrl;

    if (!fileUrl) {
      return NextResponse.json({ error: 'URL do arquivo não enviada.' }, { status: 400 });
    }

    const parts = new URL(fileUrl);
    const bucket = 'music' // storage/v1/object/public/[bucket]/path
    const filePath = parts.pathname.split(`/public/${bucket}/`)[1];

    if (!bucket || !filePath) {
      return NextResponse.json({ error: 'URL inválida para Supabase Storage.' }, { status: 400 });
    }

    const { data, error } = await supabase.storage.from(bucket).download(filePath);

    if (error || !data) {
      return NextResponse.json({ error: 'Erro ao baixar arquivo do Supabase.', detalhes: error?.message }, { status: 500 });
    }

    const buffer = Buffer.from(await data.arrayBuffer());

    const fileName = filePath.split('/').pop() || 'arquivo.pdf';

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`
      }
    });
  } catch (err) {
    return NextResponse.json({ error: 'Erro inesperado.', detalhes: err?.toString() }, { status: 500 });
  }
};
