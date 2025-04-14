export class User {
    id: string;
    name?: string;
    email?: string;
    password?: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(props: { id: string; createdAt: Date; updatedAt: Date } & Partial<User>) {
        this.id = props.id;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;

        this.validate();
    }

    private validate(): void {
        if (this.name && this.name.trim().length === 0) {
            throw new Error("Name cannot be empty.");
        }

        if (this.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
            throw new Error("Invalid email format.");
        }

        if (this.password && this.password.length < 6) {
            throw new Error("Password must be at least 6 characters long.");
        }
    }
}
