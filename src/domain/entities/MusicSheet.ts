import { MusicSheetCategory } from "./MusicSheetCategory";
import { MusicSheetInstrument } from "./MusicSheetInstrument";

export class MusicSheet {
    id: string;
    name: string;
    file: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    category?: Partial<MusicSheetCategory> | null; // Allow partial objects
    instrument?: Partial<MusicSheetInstrument> | null; // Allow partial objects

    constructor(props: {
        id: string;
        name: string;
        file: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        category?: Partial<MusicSheetCategory> | null;
        instrument?: Partial<MusicSheetInstrument> | null;
    }) {
        this.id = props.id;
        this.name = props.name;
        this.file = props.file;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.userId = props.userId;
        this.category = props.category || null;
        this.instrument = props.instrument || null;

        this.validate();
    }

    protected validate(): void {
        if (!this.name || this.name.trim().length === 0) {
            throw new Error("Name is required and cannot be empty.");
        }

        if (!this.file || this.file.trim().length === 0) {
            throw new Error("File is required and cannot be empty.");
        }
    }
}
