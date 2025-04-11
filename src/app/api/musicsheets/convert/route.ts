import { NextRequest, NextResponse } from "next/server";
import { musicSheetService } from "@/src/config/dependencies";

export async function POST(req: NextRequest) {
  try {
    const { sheetUrl } = await req.json();

    if (!sheetUrl) {
      return NextResponse.json({ error: "Sheet URL is required." }, { status: 400 });
    }

    const mxlUrl = await musicSheetService.fetchAndConvertMusicSheet(sheetUrl);

    return NextResponse.json({ mxlUrl }, { status: 200 });
  } catch (error: any) {
    console.error("Error in converting music sheet:", error.message);
    return NextResponse.json(
      { error: error.message || "Failed to convert music sheet." },
      { status: 500 }
    );
  }
}
