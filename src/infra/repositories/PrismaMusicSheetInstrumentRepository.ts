import { PrismaClient } from "@prisma/client";
import { IMusicSheetInstrumentRepository } from "@/src/domain/repositories/IMusicSheetInstrumentRepository";
import { MusicSheetInstrument } from "@/src/domain/entities/MusicSheetInstrument";

export class PrismaMusicSheetInstrumentRepository implements IMusicSheetInstrumentRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<MusicSheetInstrument | null> {
        const instrument = await this.prisma.musicSheetInstrument.findUnique({ where: { id } });
        return instrument ? new MusicSheetInstrument(instrument) : null;
    }

    async create(data: Partial<MusicSheetInstrument>): Promise<MusicSheetInstrument> {
        const instrument = await this.prisma.musicSheetInstrument.create({ data });
        return new MusicSheetInstrument(instrument);
    }

    async update(id: string, data: Partial<MusicSheetInstrument>): Promise<MusicSheetInstrument> {
        const instrument = await this.prisma.musicSheetInstrument.update({ where: { id }, data });
        return new MusicSheetInstrument(instrument);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.musicSheetInstrument.delete({ where: { id } });
    }

    async getAll(): Promise<MusicSheetInstrument[]> {
        const instruments = await this.prisma.musicSheetInstrument.findMany();
        return instruments.map((instrument:any) => new MusicSheetInstrument(instrument));
    }
}
