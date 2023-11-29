import { ParcelStatus } from "@/types";

export const PARCEL_STATUS: Record<ParcelStatus, string> = {
  pending: "Menunggu",
  "on-the-way": "Sedang Dikirim",
  delivered: "Terkirim",
};
