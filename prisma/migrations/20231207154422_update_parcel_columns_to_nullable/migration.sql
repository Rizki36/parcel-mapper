-- DropForeignKey
ALTER TABLE "Parcel" DROP CONSTRAINT "Parcel_courierId_fkey";

-- AlterTable
ALTER TABLE "Parcel" ALTER COLUMN "recipientAddress" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL,
ALTER COLUMN "latitude" DROP NOT NULL,
ALTER COLUMN "courierId" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AddForeignKey
ALTER TABLE "Parcel" ADD CONSTRAINT "Parcel_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Courier"("id") ON DELETE SET NULL ON UPDATE CASCADE;
