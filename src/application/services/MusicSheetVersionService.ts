import { IMusicSheetVersionRepository } from "@/src/domain/repositories/IMusicSheetVersionRepository";
import { MusicSheetVersion } from "@/src/domain/entities/MusicSheetVersion";

export class MusicSheetVersionService {
    constructor(private readonly versionRepository: IMusicSheetVersionRepository) {}

    async getVersionById(id: string): Promise<MusicSheetVersion | null> {
        if (!id) {
            throw new Error("Version ID is required.");
        }

        const version = await this.versionRepository.findById(id);
        if (!version) {
            throw new Error("Version not found.");
        }

        return version;
    }

    async createVersion(data: Partial<MusicSheetVersion>): Promise<MusicSheetVersion> {
        if (!data.name || data.name.trim().length === 0) {
            throw new Error("Version name is required.");
        }

        if (!data.file || data.file.trim().length === 0) {
            throw new Error("Version file is required.");
        }

        if (!data.action || data.action.trim().length === 0) {
            throw new Error("Action is required.");
        }

        const version = await this.versionRepository.create(data);
        return version;
    }

    async updateVersion(id: string, data: Partial<MusicSheetVersion>): Promise<MusicSheetVersion> {
        if (!id) {
            throw new Error("Version ID is required.");
        }

        const version = await this.versionRepository.findById(id);
        if (!version) {
            throw new Error("Version not found.");
        }

        if (data.name && data.name.trim().length === 0) {
            throw new Error("Version name cannot be empty.");
        }

        const updatedVersion = await this.versionRepository.update(id, data);
        return updatedVersion;
    }

    async deleteVersion(id: string): Promise<void> {
        if (!id) {
            throw new Error("Version ID is required.");
        }

        const version = await this.versionRepository.findById(id);
        if (!version) {
            throw new Error("Version not found.");
        }

        await this.versionRepository.delete(id);
    }

    async getAllVersions(): Promise<MusicSheetVersion[]> {
        return this.versionRepository.getAll();
    }
}
