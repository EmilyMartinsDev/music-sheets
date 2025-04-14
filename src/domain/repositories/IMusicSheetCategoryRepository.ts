import { MusicSheetCategory } from "../entities/MusicSheetCategory";

export interface IMusicSheetCategoryRepository {
    findById(id: string): Promise<MusicSheetCategory | null>;
    create(data: Partial<MusicSheetCategory>): Promise<MusicSheetCategory>;
    update(id: string, data: Partial<MusicSheetCategory>): Promise<MusicSheetCategory>;
    delete(id: string): Promise<void>;
    getAll(): Promise<MusicSheetCategory[]>;
}
