export type ParcelStatus = "on-the-way" | "delivered" | "pending";

export type Parcel = {
  id: string;
  recipientName: string;
  recipientAddress: string;
  status: ParcelStatus;
  longitude: number;
  latitude: number;
  courierId: string;
  createdAt: string;
  updatedAt: string;
};
