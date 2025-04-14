import { musicSheetService } from "@/src/config/dependencies";
import { NextResponse } from "next/server";
import { supabase } from "@/src/config/supabase";

function bufferToDataURL(buffer: Buffer, mimeType: string): string {
  return `data:${mimeType};base64,${buffer.toString("base64")}`;
}

export async function GET() {
  try {
    const musicSheets = await musicSheetService.getAllMusicSheets();
    return NextResponse.json(musicSheets, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch music sheets" }, { status: 500 });
  }
}
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const fileXML = formData.get("fileXML") as File | null;
    if (!file) {
      console.error("Erro: Arquivo não enviado.");
      return NextResponse.json({ error: "Arquivo é obrigatório." }, { status: 400 });
    }

    const fileBuffer = await file.arrayBuffer();
    const filePath = `${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("music")
      .upload(filePath, fileBuffer, { contentType: file.type });

    if (uploadError) {
      console.error("Erro ao fazer upload para o Supabase:", uploadError.message);
      throw new Error(`Erro ao fazer upload para o Supabase: ${uploadError.message}`);
    }

    const { data: publicUrlData } = supabase.storage.from("music").getPublicUrl(filePath);
    const publicUrl = publicUrlData?.publicUrl;

    if (!publicUrl) {
      throw new Error("Erro ao obter URL pública do arquivo.");
    }

    const name = formData.get("name") as string;
    const instrumentId = formData.get("instrumentId") as string;
    const categoryId = formData.get("categoryId") as string;
    const userId = formData.get("userId") as string;

    if (!name || !instrumentId || !categoryId || !userId) {
      throw new Error("Todos os campos (name, instrumentId, categoryId, userId) são obrigatórios.");
    }

    const dataToSave = {
      name,
      file: publicUrl,
      instrument: { id: instrumentId },
      category: { id: categoryId },
      userId,
      fileXML:'',
    };
    if (fileXML) {
      const fileBuffer = await fileXML.arrayBuffer();
      const sanitizedFileName = fileXML.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
      const filePath = `${Date.now()}-${sanitizedFileName}`;

      const { error: uploadError } = await supabase.storage
        .from("music")
        .upload(filePath, fileBuffer, { contentType: fileXML.type });

      if (uploadError) {
        console.error("Erro ao fazer upload para o Supabase:", uploadError.message);
        throw new Error(`Erro ao fazer upload para o Supabase: ${uploadError.message}`);
      }

      const { data: publicUrlData } = supabase.storage.from("music").getPublicUrl(filePath);
      const publicUrl = publicUrlData?.publicUrl;

      if (!publicUrl) {
        throw new Error("Erro ao obter URL pública do arquivo.");
      }

      dataToSave.fileXML = publicUrl;
    }
    const musicSheet = await musicSheetService.createMusicSheet(dataToSave);

    return NextResponse.json(musicSheet, { status: 201 });
  } catch (error: any) {
    console.error("Erro ao criar partitura:", error.message);
    return NextResponse.json({ error: error.message || "Failed to create music sheet" }, { status: 500 });
  }
}