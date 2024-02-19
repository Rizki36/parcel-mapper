// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

export type Node = {
  id: number;
  lat: number;
  lng: number;
  type: "branch" | "customer";
};

export type DeliveryState = {
  step: number;
  distances: number[][]; // n x n matrix
  nodes: Node[];
};

export type DeliveryActions = {
  setStep: (_number: number) => void;
  setDistances: (_distances: number[][]) => void;
  setNodes: (_nodes: Node[]) => void;
};

export type DeliveryStore = DeliveryState & DeliveryActions;

export const initDeliveryStore = (): DeliveryState => {
  return {
    step: 1,
    distances: [],
    nodes: [],
  };
};

export const defaultInitState: DeliveryState = {
  step: 0,
  distances: [],
  nodes: [],
};

export const createDeliveryStore = (
  initState: DeliveryState = defaultInitState
) => {
  return createStore<DeliveryStore>()((set) => ({
    ...initState,
    setStep: (step) => set({ step }),
    setDistances: (distances) => set({ distances }),
    setNodes: (nodes) => set({ nodes }),
  }));
};
