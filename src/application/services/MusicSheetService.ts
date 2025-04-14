import { IMusicSheetRepository } from "@/src/domain/repositories/IMusicSheetRepository";
import { MusicSheet } from "@/src/domain/entities/MusicSheet";

export class MusicSheetService {
    constructor(private readonly musicSheetRepository: IMusicSheetRepository) {}

    async getMusicSheetById(id: string): Promise<MusicSheet | null> {
        try {
            if (!id) {
                throw new Error("MusicSheet ID is required.");
            }

            const musicSheet = await this.musicSheetRepository.findById(id);
            if (!musicSheet) {
                throw new Error("MusicSheet not found.");
            }

            return musicSheet;
        } catch (error) {
            console.error("Error in getMusicSheetById:", error);
            throw error;
        }
    }

    async createMusicSheet(data: Partial<MusicSheet>): Promise<MusicSheet> {
        try {
            console.log("Dados recebidos no serviço:", data);

            if (!data.name || data.name.trim().length === 0) {
                throw new Error("MusicSheet name is required.");
            }

            if (!data.file || data.file.trim().length === 0) {
                throw new Error("MusicSheet file is required.");
            }

            if (data.instrument && !data.instrument.id) {
                throw new Error("Instrument ID is required.");
            }

            if (data.category && !data.category.id) {
                throw new Error("Category ID is required.");
            }

            const musicSheet = await this.musicSheetRepository.create(data);
            console.log("Partitura criada no repositório:", musicSheet);

            return musicSheet;
        } catch (error) {
            console.error("Erro no serviço ao criar partitura:", error);
            throw error;
        }
    }

    async updateMusicSheet(id: string, data: Partial<MusicSheet>): Promise<MusicSheet> {
        try {
            if (!id) {
                throw new Error("MusicSheet ID is required.");
            }

            const musicSheet = await this.musicSheetRepository.findById(id);
            if (!musicSheet) {
                throw new Error("MusicSheet not found.");
            }

            if (data.name && data.name.trim().length === 0) {
                throw new Error("MusicSheet name cannot be empty.");
            }

            const updatedMusicSheet = await this.musicSheetRepository.update(id, data);
            return updatedMusicSheet;
        } catch (error) {
            console.error("Error in updateMusicSheet:", error);
            throw error;
        }
    }

    async deleteMusicSheet(id: string): Promise<void> {
        try {
            if (!id) {
                throw new Error("MusicSheet ID is required.");
            }

            const musicSheet = await this.musicSheetRepository.findById(id);
            if (!musicSheet) {
                throw new Error("MusicSheet not found.");
            }

            await this.musicSheetRepository.delete(id);
        } catch (error) {
            console.error("Error in deleteMusicSheet:", error);
            throw error;
        }
    }

    async getAllMusicSheets(): Promise<MusicSheet[]> {
        try {
            return await this.musicSheetRepository.getAll();
        } catch (error) {
            console.error("Error in getAllMusicSheets:", error);
            throw error;
        }
    }
}
