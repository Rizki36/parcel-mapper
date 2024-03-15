/*
  Warnings:

  - Added the required column `name` to the `BranchAdmin` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BranchAdmin" DROP CONSTRAINT "BranchAdmin_branchId_fkey";

-- DropForeignKey
ALTER TABLE "BranchAdmin" DROP CONSTRAINT "BranchAdmin_userId_fkey";

-- AlterTable
ALTER TABLE "BranchAdmin" ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "branchId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "BranchAdmin" ADD CONSTRAINT "BranchAdmin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranchAdmin" ADD CONSTRAINT "BranchAdmin_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;
