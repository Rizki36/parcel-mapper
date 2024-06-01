/*
  Warnings:

  - The values [PENDING] on the enum `ParcelStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ParcelStatus_new" AS ENUM ('ON_THE_WAY', 'DELIVERED');
ALTER TABLE "Parcel" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Parcel" ALTER COLUMN "status" TYPE "ParcelStatus_new" USING ("status"::text::"ParcelStatus_new");
ALTER TYPE "ParcelStatus" RENAME TO "ParcelStatus_old";
ALTER TYPE "ParcelStatus_new" RENAME TO "ParcelStatus";
DROP TYPE "ParcelStatus_old";
ALTER TABLE "Parcel" ALTER COLUMN "status" SET DEFAULT 'ON_THE_WAY';
COMMIT;

-- AlterTable
ALTER TABLE "Parcel" ALTER COLUMN "status" SET DEFAULT 'ON_THE_WAY';
