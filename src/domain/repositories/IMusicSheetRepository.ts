import { MusicSheet } from "../entities/MusicSheet";

export interface IMusicSheetRepository {
    findById(id: string): Promise<MusicSheet | null>;
    create(data: Partial<MusicSheet>): Promise<MusicSheet>;
    update(id: string, data: Partial<MusicSheet>): Promise<MusicSheet>;
    delete(id: string): Promise<void>;
    getAll(): Promise<MusicSheet[]>;
}
