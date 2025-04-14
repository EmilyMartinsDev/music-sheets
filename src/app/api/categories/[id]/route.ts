import { musicSheetCategoryService } from "@/src/config/dependencies";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const category = await musicSheetCategoryService.getCategoryById(params.id);
    return NextResponse.json(category, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch category" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    const updatedCategory = await musicSheetCategoryService.updateCategory(params.id, data);
    return NextResponse.json(updatedCategory, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to update category" }, { status: 500 });
  }
}
export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
    try {
      const { id } = await context.params;
      await musicSheetCategoryService.deleteCategory(id);
      return NextResponse.json(null, { status: 204 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message || "Failed to delete category" }, { status: 500 });
    }
  }