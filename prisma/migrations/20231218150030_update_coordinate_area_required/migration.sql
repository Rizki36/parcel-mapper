/*
  Warnings:

  - Made the column `longitude` on table `Area` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `Area` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Area" ALTER COLUMN "longitude" SET NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL;
