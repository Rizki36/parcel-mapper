/*
  Warnings:

  - A unique constraint covering the columns `[courierId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[branchAdminId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[centralAdminId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "BranchAdmin" DROP CONSTRAINT "BranchAdmin_userId_fkey";

-- DropForeignKey
ALTER TABLE "CentralAdmin" DROP CONSTRAINT "CentralAdmin_userId_fkey";

-- DropForeignKey
ALTER TABLE "Courier" DROP CONSTRAINT "Courier_userId_fkey";

-- AlterTable
ALTER TABLE "CentralAdmin" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "branchAdminId" TEXT,
ADD COLUMN     "centralAdminId" TEXT,
ADD COLUMN     "courierId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_courierId_key" ON "User"("courierId");

-- CreateIndex
CREATE UNIQUE INDEX "User_branchAdminId_key" ON "User"("branchAdminId");

-- CreateIndex
CREATE UNIQUE INDEX "User_centralAdminId_key" ON "User"("centralAdminId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Courier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_branchAdminId_fkey" FOREIGN KEY ("branchAdminId") REFERENCES "BranchAdmin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_centralAdminId_fkey" FOREIGN KEY ("centralAdminId") REFERENCES "CentralAdmin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
