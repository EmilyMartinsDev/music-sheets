import { musicSheetCategoryService } from "@/src/config/dependencies";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await musicSheetCategoryService.getAllCategories();
    return NextResponse.json(categories, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const category = await musicSheetCategoryService.createCategory(data);
    return NextResponse.json(category, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to create category" }, { status: 500 });
  }
}
