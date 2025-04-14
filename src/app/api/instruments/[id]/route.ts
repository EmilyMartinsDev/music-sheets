import { musicSheetInstrumentService } from "@/src/config/dependencies";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const instrument = await musicSheetInstrumentService.getInstrumentById(params.id);
        return NextResponse.json(instrument, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || "Failed to fetch instrument" }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const data = await req.json();
        const updatedInstrument = await musicSheetInstrumentService.updateInstrument(params.id, data);
        return NextResponse.json(updatedInstrument, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || "Failed to update instrument" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
    try {
        const { id } = await context.params;
        await musicSheetInstrumentService.deleteInstrument(id);
        return NextResponse.json({ message: "Instrument deleted successfully" }, { status: 204 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || "Failed to delete instrument" }, { status: 500 });
    }
}
