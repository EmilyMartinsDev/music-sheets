export class MusicSheetInstrument {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    userId?: string;

    constructor(props: {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    } & Partial<MusicSheetInstrument>) {
        this.id = props.id;
        this.name = props.name;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.userId = props.userId;

        this.validate();
    }

    private validate(): void {
        if (!this.name || this.name.trim().length === 0) {
            throw new Error("Name is required and cannot be empty.");
        }
    }
}
