import { musicSheetInstrumentService } from "@/src/config/dependencies";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const instruments = await musicSheetInstrumentService.getAllInstruments();
    return NextResponse.json(instruments, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch instruments" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const instrument = await musicSheetInstrumentService.createInstrument(data);
    return NextResponse.json(instrument, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create instrument" }, { status: 500 });
  }
}
