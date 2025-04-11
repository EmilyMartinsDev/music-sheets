-- AlterTable
ALTER TABLE "MusicSheetVersion" ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "instrumentId" TEXT;

-- AddForeignKey
ALTER TABLE "MusicSheetVersion" ADD CONSTRAINT "MusicSheetVersion_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "MusicSheetCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MusicSheetVersion" ADD CONSTRAINT "MusicSheetVersion_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "MusicSheetInstrument"("id") ON DELETE SET NULL ON UPDATE CASCADE;
