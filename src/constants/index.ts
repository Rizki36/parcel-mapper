import { ParcelStatus } from "@prismaorm/generated/client";

export const ENV = {
  MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
};

export const PARCEL_STATUS: Record<ParcelStatus, string> = {
  PENDING: "Menunggu",
  ON_THE_WAY: "Sedang Dikirim",
  DELIVERED: "Terkirim",
};
