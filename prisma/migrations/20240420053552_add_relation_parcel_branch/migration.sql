-- AlterTable
ALTER TABLE "Parcel" ADD COLUMN     "branchId" TEXT;

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;
