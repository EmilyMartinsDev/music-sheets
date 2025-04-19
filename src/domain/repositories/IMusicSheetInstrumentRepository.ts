import { MusicSheetInstrument } from "../entities/MusicSheetInstrument";

export interface IMusicSheetInstrumentRepository {
    findById(id: string): Promise<MusicSheetInstrument | null>;
    create(data: Partial<MusicSheetInstrument>): Promise<MusicSheetInstrument>;
    update(id: string, data: Partial<MusicSheetInstrument>): Promise<MusicSheetInstrument>;
    delete(id: string): Promise<void>;
    getAll(): Promise<MusicSheetInstrument[]>;
}
