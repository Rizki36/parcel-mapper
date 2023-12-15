-- DropForeignKey
ALTER TABLE "Courier" DROP CONSTRAINT "Courier_branchId_fkey";

-- DropForeignKey
ALTER TABLE "Courier" DROP CONSTRAINT "Courier_userId_fkey";

-- AlterTable
ALTER TABLE "Courier" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "branchId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Courier" ADD CONSTRAINT "Courier_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courier" ADD CONSTRAINT "Courier_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;
