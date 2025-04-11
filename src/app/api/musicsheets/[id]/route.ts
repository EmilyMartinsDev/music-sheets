import { musicSheetService } from "@/src/config/dependencies";
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/src/config/supabase";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const musicSheet = await musicSheetService.getMusicSheetById(params.id);
    return NextResponse.json(musicSheet, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message || "Failed to fetch music sheet" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    const dataToUpdate: any = {
      name: formData.get("name") as string | undefined,
      instrument: { id: formData.get("instrumentId") as string | undefined },
      category: { id: formData.get("categoryId") as string | undefined },
      userId: formData.get("userId") as string | undefined,
    };

    if (file) {
      const fileBuffer = await file.arrayBuffer();
      const filePath = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("music-sheets")
        .upload(filePath, fileBuffer, { contentType: file.type });

      if (uploadError) {
        console.error("Erro ao fazer upload para o Supabase:", uploadError.message);
        throw new Error(`Erro ao fazer upload para o Supabase: ${uploadError.message}`);
      }

      const { data: publicUrlData } = supabase.storage.from("music-sheets").getPublicUrl(filePath);
      const publicUrl = publicUrlData?.publicUrl;

      if (!publicUrl) {
        throw new Error("Erro ao obter URL pública do arquivo.");
      }

      dataToUpdate.file = publicUrl;
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
    await musicSheetService.deleteMusicSheet(id);
    return NextResponse.json({ message: "Music sheet deleted successfully" }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message || "Failed to delete music sheet" }, { status: 500 });
  }
}
