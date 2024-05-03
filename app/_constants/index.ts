import { ParcelStatus } from "@prismaorm/generated/client";

export const ENV = {
  MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
};

export const PARCEL_STATUS_LABEL: Record<ParcelStatus, string> = {
  PENDING: "Pending",
  ON_THE_WAY: "Sedang Dikirim",
  DELIVERED: "Terkirim",
};
