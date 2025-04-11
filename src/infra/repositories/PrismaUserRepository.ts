import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "@/src/domain/repositories/IUserRepository";
import { User } from "@/src/domain/entities/User";

export class PrismaUserRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaClient) {}
    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({ where: { email } });
        return user ? new User(user) : null;
    }

    async findById(id: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({ where: { id } });
        return user ? new User(user) : null;
    }

    async create(data: Partial<User>): Promise<User> {
        const user = await this.prisma.user.create({ data });
        return new User(user);
    }

    async update(id: string, data: Partial<User>): Promise<User> {
        const user = await this.prisma.user.update({ where: { id }, data });
        return new User(user);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({ where: { id } });
    }

    async getAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        return users.map((user:any) => new User(user));
    }
}
