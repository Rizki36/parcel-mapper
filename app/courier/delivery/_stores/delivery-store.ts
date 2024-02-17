// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

export type DeliveryState = {
  step: number;
};

export type DeliveryActions = {
  setStep: (_number: number) => void;
};

export type DeliveryStore = DeliveryState & DeliveryActions;

export const initDeliveryStore = (): DeliveryState => {
  return { step: 1 };
};

export const defaultInitState: DeliveryState = {
  step: 0,
};

export const createDeliveryStore = (
  initState: DeliveryState = defaultInitState
) => {
  return createStore<DeliveryStore>()((set) => ({
    ...initState,
    setStep: (step) => set({ step: step }),
  }));
};
