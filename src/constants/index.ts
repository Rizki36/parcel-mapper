import { ParcelStatus } from "@/types";

export const ENV = {
  MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
};

export const PARCEL_STATUS: Record<ParcelStatus, string> = {
  pending: "Menunggu",
  "on-the-way": "Sedang Dikirim",
  delivered: "Terkirim",
};
