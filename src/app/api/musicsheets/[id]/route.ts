import { musicSheetService } from "@/src/config/dependencies";
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/src/config/supabase";

export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params; // Await params before destructuring

        if (!id) {
            return NextResponse.json({ error: "MusicSheet ID is required." }, { status: 400 });
        }

        const musicSheet = await musicSheetService.getMusicSheetById(id);
        if (!musicSheet) {
            return NextResponse.json({ error: "MusicSheet not found." }, { status: 404 });
        }

        return NextResponse.json(musicSheet, { status: 200 });
    } catch (error: any) {
        console.error("Error in fetching music sheet by ID:", error.message);
        return NextResponse.json(
            { error: error.message || "Failed to fetch music sheet." },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  const { id } = await context.params;

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const fileXML = formData.get("fileXML") as File | null;

    const dataToUpdate: any = {};

    const name = formData.get("name");
    const instrumentId = formData.get("instrumentId");
    const categoryId = formData.get("categoryId");
    const userId = formData.get("userId");

    if (name) dataToUpdate.name = name;
    if (instrumentId) dataToUpdate.instrument = { id: instrumentId };
    if (categoryId) dataToUpdate.category = { id: categoryId };
    if (userId) dataToUpdate.userId = userId;

    if (file) {
      const fileBuffer = await file.arrayBuffer();
      const filePath = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("music")
        .upload(filePath, fileBuffer, { contentType: file.type });

      if (uploadError) {
        console.error("Erro ao fazer upload para o Supabase:", uploadError.message);
        throw new Error(`Erro ao fazer upload para o Supabase: ${uploadError.message}`);
      }

      const { data: publicUrlData } = supabase.storage.from("music-sheets").getPublicUrl(filePath);
      const publicUrl = publicUrlData?.publicUrl;

      if (!publicUrl) throw new Error("Erro ao obter URL pública do arquivo.");

      dataToUpdate.file = publicUrl;
    }

    if (fileXML) {
      const fileBuffer = await fileXML.arrayBuffer();
      const sanitizedFileName = fileXML.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
      const filePath = `${Date.now()}-${sanitizedFileName}`;

      const { error: uploadError } = await supabase.storage
        .from("music")
        .upload(filePath, fileBuffer, { contentType: fileXML.type });

      if (uploadError) {
        console.error("Erro ao fazer upload do XML:", uploadError.message);
        throw new Error(`Erro ao fazer upload do XML: ${uploadError.message}`);
      }

      const { data: publicUrlData } = supabase.storage.from("music").getPublicUrl(filePath);
      const publicUrl = publicUrlData?.publicUrl;

      if (!publicUrl) throw new Error("Erro ao obter URL pública do XML.");

      dataToUpdate.fileXML = publicUrl;
    }

    const updatedMusicSheet = await musicSheetService.updateMusicSheet(id, dataToUpdate);
    console.log("Resposta do serviço de atualização:", updatedMusicSheet);

    return NextResponse.json(updatedMusicSheet, { status: 200 });
  } catch (error: any) {
    console.error("Erro ao atualizar partitura:", error.message);
    return NextResponse.json({ error: error.message || "Failed to update music sheet" }, { status: 500 });
  }
}
export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const { id } = await context.params;

  try {
    if (!id) {
      return NextResponse.json({ error: "MusicSheet ID is required." }, { status: 400 });
    }

    // Tente buscar a partitura para garantir que existe
    const musicSheet = await musicSheetService.getMusicSheetById(id);
    if (!musicSheet) {
      return NextResponse.json({ error: "MusicSheet not found." }, { status: 404 });
    }

    // Excluir a partitura do Supabase
    const { error: deleteError } = await supabase.storage.from("music-sheets").remove([musicSheet.file]);
    if (deleteError) {
      console.error("Erro ao excluir partitura do Supabase:", deleteError.message);
      throw new Error(`Erro ao excluir partitura do Supabase: ${deleteError.message}`);
    }

    // Agora, excluir a partitura do banco de dados
    await musicSheetService.deleteMusicSheet(id);

    return NextResponse.json({ message: "MusicSheet deleted successfully." }, { status: 200 });
  } catch (error: any) {
    console.error("Erro ao excluir partitura:", error.message);
    return NextResponse.json({ error: error.message || "Failed to delete music sheet." }, { status: 500 });
  }
}