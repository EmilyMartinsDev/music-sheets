import { PrismaClient } from "@prisma/client";
import { IMusicSheetCategoryRepository } from "@/src/domain/repositories/IMusicSheetCategoryRepository";
import { MusicSheetCategory } from "@/src/domain/entities/MusicSheetCategory";

export class PrismaMusicSheetCategoryRepository implements IMusicSheetCategoryRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<MusicSheetCategory | null> {
        const category = await this.prisma.musicSheetCategory.findUnique({ where: { id } });
        return category ? new MusicSheetCategory(category) : null;
    }

    async create(data: Partial<MusicSheetCategory>): Promise<MusicSheetCategory> {
        const category = await this.prisma.musicSheetCategory.create({ data });
        return new MusicSheetCategory(category);
    }

    async update(id: string, data: Partial<MusicSheetCategory>): Promise<MusicSheetCategory> {
        const category = await this.prisma.musicSheetCategory.update({ where: { id }, data });
        return new MusicSheetCategory(category);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.musicSheetCategory.delete({ where: { id } });
    }

    async getAll(): Promise<MusicSheetCategory[]> {
        const categories = await this.prisma.musicSheetCategory.findMany();
        return categories.map((category:any) => new MusicSheetCategory(category));
    }
}
