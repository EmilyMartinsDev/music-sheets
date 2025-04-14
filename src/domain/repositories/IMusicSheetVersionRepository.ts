import { MusicSheetVersion } from "../entities/MusicSheetVersion";

export interface IMusicSheetVersionRepository {
    findById(id: string): Promise<MusicSheetVersion | null>;
    create(data: Partial<MusicSheetVersion>): Promise<MusicSheetVersion>;
    update(id: string, data: Partial<MusicSheetVersion>): Promise<MusicSheetVersion>;
    delete(id: string): Promise<void>;
    getAll(): Promise<MusicSheetVersion[]>;
}
