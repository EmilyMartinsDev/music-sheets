import { PrismaUserRepository } from "@/src/infra/repositories/PrismaUserRepository";
import { PrismaMusicSheetRepository } from "@/src/infra/repositories/PrismaMusicSheetRepository";
import { PrismaMusicSheetCategoryRepository } from "@/src/infra/repositories/PrismaMusicSheetCategoryRepository";
import { PrismaMusicSheetInstrumentRepository } from "@/src/infra/repositories/PrismaMusicSheetInstrumentRepository";
import { PrismaMusicSheetVersionRepository } from "@/src/infra/repositories/PrismaMusicSheetVersionRepository";
import { UserService } from "@/src/application/services/UserService";
import { MusicSheetService } from "@/src/application/services/MusicSheetService";
import { MusicSheetCategoryService } from "@/src/application/services/MusicSheetCategoryService";
import { MusicSheetInstrumentService } from "@/src/application/services/MusicSheetInstrumentService";
import { MusicSheetVersionService } from "@/src/application/services/MusicSheetVersionService";
import { PrismaClient } from "../generated/prisma";

// Prisma Client
const prisma = new PrismaClient();

// Repositories
const userRepository = new PrismaUserRepository(prisma);
const musicSheetRepository = new PrismaMusicSheetRepository(prisma);
const musicSheetCategoryRepository = new PrismaMusicSheetCategoryRepository(prisma);
const musicSheetInstrumentRepository = new PrismaMusicSheetInstrumentRepository(prisma);
const musicSheetVersionRepository = new PrismaMusicSheetVersionRepository(prisma);

// Services
export const userService = new UserService(userRepository); // Certifique-se de que o UserService está instanciado corretamente
export const musicSheetService = new MusicSheetService(musicSheetRepository);
export const musicSheetCategoryService = new MusicSheetCategoryService(musicSheetCategoryRepository);
export const musicSheetInstrumentService = new MusicSheetInstrumentService(musicSheetInstrumentRepository);
export const musicSheetVersionService = new MusicSheetVersionService(musicSheetVersionRepository);
