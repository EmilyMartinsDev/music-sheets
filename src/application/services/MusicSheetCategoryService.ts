import { IMusicSheetCategoryRepository } from "@/src/domain/repositories/IMusicSheetCategoryRepository";
import { MusicSheetCategory } from "@/src/domain/entities/MusicSheetCategory";

export class MusicSheetCategoryService {
    constructor(private readonly categoryRepository: IMusicSheetCategoryRepository) {}

    async getCategoryById(id: string): Promise<MusicSheetCategory | null> {
        if (!id) {
            throw new Error("Category ID is required.");
        }

        const category = await this.categoryRepository.findById(id);
        if (!category) {
            throw new Error("Category not found.");
        }

        return category;
    }

    async createCategory(data: Partial<MusicSheetCategory>): Promise<MusicSheetCategory> {
        if (!data.name || data.name.trim().length === 0) {
            throw new Error("Category name is required.");
        }

        const category = await this.categoryRepository.create(data);
        return category;
    }

    async updateCategory(id: string, data: Partial<MusicSheetCategory>): Promise<MusicSheetCategory> {
        if (!id) {
            throw new Error("Category ID is required.");
        }

        const category = await this.categoryRepository.findById(id);
        if (!category) {
            throw new Error("Category not found.");
        }

        if (data.name && data.name.trim().length === 0) {
            throw new Error("Category name cannot be empty.");
        }

        const updatedCategory = await this.categoryRepository.update(id, data);
        return updatedCategory;
    }

    async deleteCategory(id: string): Promise<void> {
        if (!id) {
            throw new Error("Category ID is required.");
        }

        const category = await this.categoryRepository.findById(id);
        if (!category) {
            throw new Error("Category not found.");
        }

        await this.categoryRepository.delete(id);
    }

    async getAllCategories(): Promise<MusicSheetCategory[]> {
        return this.categoryRepository.getAll();
    }
}
