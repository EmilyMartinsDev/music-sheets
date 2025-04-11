/*
  Warnings:

  - Added the required column `version` to the `MusicSheetVersion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MusicSheetVersion" ADD COLUMN     "version" INTEGER NOT NULL;
