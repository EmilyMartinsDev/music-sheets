import { IMusicSheetInstrumentRepository } from "@/src/domain/repositories/IMusicSheetInstrumentRepository";
import { MusicSheetInstrument } from "@/src/domain/entities/MusicSheetInstrument";

export class MusicSheetInstrumentService {
    constructor(private readonly instrumentRepository: IMusicSheetInstrumentRepository) {}

    async getInstrumentById(id: string): Promise<MusicSheetInstrument | null> {
        if (!id) {
            throw new Error("Instrument ID is required.");
        }

        const instrument = await this.instrumentRepository.findById(id);
        if (!instrument) {
            throw new Error("Instrument not found.");
        }

        return instrument;
    }

    async createInstrument(data: Partial<MusicSheetInstrument>): Promise<MusicSheetInstrument> {
        if (!data.name || data.name.trim().length === 0) {
            throw new Error("Instrument name is required.");
        }

        const instrument = await this.instrumentRepository.create(data);
        return instrument;
    }

    async updateInstrument(id: string, data: Partial<MusicSheetInstrument>): Promise<MusicSheetInstrument> {
        if (!id) {
            throw new Error("Instrument ID is required.");
        }

        const instrument = await this.instrumentRepository.findById(id);
        if (!instrument) {
            throw new Error("Instrument not found.");
        }

        if (data.name && data.name.trim().length === 0) {
            throw new Error("Instrument name cannot be empty.");
        }

        const updatedInstrument = await this.instrumentRepository.update(id, data);
        return updatedInstrument;
    }

    async deleteInstrument(id: string): Promise<void> {
        if (!id) {
            throw new Error("Instrument ID is required.");
        }

        const instrument = await this.instrumentRepository.findById(id);
        if (!instrument) {
            throw new Error("Instrument not found.");
        }

        await this.instrumentRepository.delete(id);
    }

    async getAllInstruments(): Promise<MusicSheetInstrument[]> {
        return this.instrumentRepository.getAll();
    }
}
