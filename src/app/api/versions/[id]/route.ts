import { musicSheetVersionService } from "@/src/config/dependencies";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const version = await musicSheetVersionService.getVersionById(params.id);
    return NextResponse.json(version, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch version" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    const updatedVersion = await musicSheetVersionService.updateVersion(params.id, data);
    return NextResponse.json(updatedVersion, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to update version" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await musicSheetVersionService.deleteVersion(params.id);
    return NextResponse.json({ message: "Version deleted successfully" }, { status: 204 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to delete version" }, { status: 500 });
  }
}
