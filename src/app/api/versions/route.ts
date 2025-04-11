import { musicSheetVersionService } from "@/src/config/dependencies";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const versions = await musicSheetVersionService.getAllVersions();
    return NextResponse.json(versions, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch versions" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const version = await musicSheetVersionService.createVersion(data);
    return NextResponse.json(version, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create version" }, { status: 500 });
  }
}
