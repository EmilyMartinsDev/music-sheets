import { IUserRepository } from "@/src/domain/repositories/IUserRepository";
import { User } from "@/src/domain/entities/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async getUserById(id: string): Promise<User | null> {
    if (!id) {
      throw new Error("User ID is required.");
    }

    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("User not found.");
    }

    return user;
  }

  async createUser(data: Partial<User>): Promise<User> {
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new Error("A valid email is required.");
    }

    if (!data.password || data.password.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }

    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new Error("Email is already in use.");
    }

    // Criptografar a senha antes de salvar
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    return user;
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    if (!id) {
      throw new Error("User ID is required.");
    }

    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("User not found.");
    }

    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new Error("A valid email is required.");
    }

    if (data.password) {
      if (data.password.length < 6) {
        throw new Error("Password must be at least 6 characters long.");
      }
      // Criptografar a nova senha, se fornecida
      data.password = await bcrypt.hash(data.password, 10);
    }

    const updatedUser = await this.userRepository.update(id, data);
    return updatedUser;
  }

  async deleteUser(id: string): Promise<void> {
    if (!id) {
      throw new Error("User ID is required.");
    }

    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("User not found.");
    }

    await this.userRepository.delete(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAll();
  }

}