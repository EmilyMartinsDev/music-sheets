import { MusicSheet } from "./MusicSheet";
import { User } from "./User";

export class MusicSheetVersion extends MusicSheet {
    action: string;
    musicSheet: MusicSheet;
    user: User;
    version: number;

    constructor(props: {
        id: string;
        name: string;
        file: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        action: string;
        musicSheet: MusicSheet;
        user: User;
        version: number;
    }) {
        super({
            id: props.id,
            name: props.name,
            file: props.file,
            createdAt: props.createdAt,
            updatedAt: props.updatedAt,
            userId: props.userId,
            category: props.musicSheet.category,
            instrument: props.musicSheet.instrument,
        });

        this.action = props.action;
        this.musicSheet = props.musicSheet;
        this.user = props.user;
        this.version = props.version;

        this.validate();
    }

    protected validate(): void {
        super.validate();

        if (!this.action || this.action.trim().length === 0) {
            throw new Error("Action is required and cannot be empty.");
        }
    }
}
