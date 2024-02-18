// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

export type DeliveryState = {
  step: number;
  distances: number[][]; // n x n matrix
};

export type DeliveryActions = {
  setStep: (_number: number) => void;
  setDistances: (_distances: number[][]) => void;
};

export type DeliveryStore = DeliveryState & DeliveryActions;

export const initDeliveryStore = (): DeliveryState => {
  return { step: 1, distances: [] };
};

export const defaultInitState: DeliveryState = {
  step: 0,
  distances: [],
};

export const createDeliveryStore = (
  initState: DeliveryState = defaultInitState
) => {
  return createStore<DeliveryStore>()((set) => ({
    ...initState,
    setStep: (step) => set({ step }),
    setDistances: (distances) => set({ distances }),
  }));
};
