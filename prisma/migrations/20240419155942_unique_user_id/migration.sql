/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `BranchAdmin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `CentralAdmin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Courier` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BranchAdmin_userId_key" ON "BranchAdmin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CentralAdmin_userId_key" ON "CentralAdmin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Courier_userId_key" ON "Courier"("userId");
