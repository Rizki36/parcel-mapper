/*
  Warnings:

  - Changed the type of `status` on the `Parcel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ParcelStatus" AS ENUM ('ON_THE_WAY', 'DELIVERED', 'PENDING');

-- AlterTable
ALTER TABLE "Parcel" DROP COLUMN "status",
ADD COLUMN     "status" "ParcelStatus" NOT NULL;
