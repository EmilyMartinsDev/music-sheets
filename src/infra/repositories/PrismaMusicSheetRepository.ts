import { PrismaClient } from "@prisma/client";
import { IMusicSheetRepository } from "@/src/domain/repositories/IMusicSheetRepository";
import { MusicSheet } from "@/src/domain/entities/MusicSheet";
import { Prisma } from "@/src/generated/prisma";

export class PrismaMusicSheetRepository implements IMusicSheetRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findById(id: string): Promise<MusicSheet | null> {
        const musicSheet = await this.prisma.musicSheet.findUnique({
            where: { id },
            include: { category: true, instrument: true, versions: true },
        });
        return musicSheet ? new MusicSheet(musicSheet) : null;
    }

    async create(data: Partial<MusicSheet>): Promise<MusicSheet> {
        try {
            console.log("Dados recebidos no repositório:", data);

            const { instrument, category, userId, ...rest } = data;

            const musicSheet = await this.prisma.musicSheet.create({
                data: {
                    ...rest,
                    user: userId ? { connect: { id: userId } } : undefined, // Corrigido para usar `connect` para o usuário
                    instrument: instrument?.id ? { connect: { id: instrument.id } } : undefined, // Conecta o instrumento
                    category: category?.id ? { connect: { id: category.id } } : undefined, // Conecta a categoria
                },
                include: { category: true, instrument: true, versions: true },
            });

            console.log("Partitura criada no banco de dados:", musicSheet);

            return new MusicSheet(musicSheet);
        } catch (error) {
            console.error("Erro no repositório ao criar partitura:", error);
            throw error;
        }
    }

    async update(id: string, data: Partial<MusicSheet>): Promise<MusicSheet> {
        const { instrument, category, userId, ...rest } = data;

        const musicSheet = await this.prisma.musicSheet.update({
            where: { id },
            data: {
                ...rest,
                user: userId ? { connect: { id: userId } } : undefined, // Corrigido para usar `connect` para o usuário
                instrument: instrument?.id ? { connect: { id: instrument.id } } : undefined, // Conecta o instrumento
                category: category?.id ? { connect: { id: category.id } } : undefined, // Conecta a categoria
            },
            include: { category: true, instrument: true, versions: true },
        });

        return new MusicSheet(musicSheet);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.musicSheet.delete({ where: { id } });
    }

    async getAll(params?: { page?: number; limit?: number; query?: string }): Promise<{ items: MusicSheet[]; totalCount: number }> {
        const page = params?.page || 1;
        const limit = params?.limit || 10;
        const skip = (page - 1) * limit;
        const query = params?.query?.toLowerCase() || "";
      
        const whereClause = query
          ? {
              name: {
                contains: query,
                mode: "insensitive", // ignora maiúsculas/minúsculas
              },
            }
          : {};
      
        const [data, totalCount] = await this.prisma.$transaction([
          this.prisma.musicSheet.findMany({
            skip,
            take: limit,
            where: whereClause,
            include: {
              category: true,
              instrument: true,
              versions: true,
            },
            orderBy: {
              createdAt: "desc",
            },
          }),
          this.prisma.musicSheet.count({ where: whereClause }),
        ]);
      
        return {
          items: data.map((sheet: any) => new MusicSheet(sheet)),
          totalCount,
        };
      }
      
}
