/*
  Warnings:

  - Made the column `latitude` on table `Branch` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `Branch` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `Parcel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `latitude` on table `Parcel` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Branch" ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "longitude" SET NOT NULL;

-- AlterTable
ALTER TABLE "Parcel" ALTER COLUMN "longitude" SET NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL;
