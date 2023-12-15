/*
  Warnings:

  - Added the required column `name` to the `Courier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Courier" ADD COLUMN     "name" TEXT NOT NULL;
