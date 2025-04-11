import { PrismaClient } from "@prisma/client";
import { IMusicSheetVersionRepository } from "@/src/domain/repositories/IMusicSheetVersionRepository";
import { MusicSheetVersion } from "@/src/domain/entities/MusicSheetVersion";

export class PrismaMusicSheetVersionRepository implements IMusicSheetVersionRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<MusicSheetVersion | null> {
        const version = await this.prisma.musicSheetVersion.findUnique({
            where: { id },
        });
        return version ? new MusicSheetVersion(version) : null;
    }

    async create(data: Partial<MusicSheetVersion>): Promise<MusicSheetVersion> {
        const version = await this.prisma.musicSheetVersion.create({ data });
        return new MusicSheetVersion(version);
    }

    async update(id: string, data: Partial<MusicSheetVersion>): Promise<MusicSheetVersion> {
        const version = await this.prisma.musicSheetVersion.update({ where: { id }, data });
        return new MusicSheetVersion(version);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.musicSheetVersion.delete({ where: { id } });
    }

    async getAll(): Promise<MusicSheetVersion[]> {
        const versions = await this.prisma.musicSheetVersion.findMany();
        return versions.map((version:any) => new MusicSheetVersion(version));
    }
}
