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
  config: {
    alpha: number;
    beta: number;
    rho: number;
    ants: number;
    iterations: number;
  };
};

export type DeliveryActions = {
  setStep: (_number: number) => void;
  setDistances: (_distances: number[][]) => void;
  setNodes: (_nodes: Node[]) => void;
  setConfig: (_config: DeliveryState["config"]) => void;
};

export type DeliveryStore = DeliveryState & DeliveryActions;

export const defaultInitState: DeliveryState = {
  step: 1,
  distances: [],
  nodes: [],
  config: {
    alpha: 1,
    beta: 2,
    rho: 0.5,
    ants: 10,
    iterations: 100,
  },
};

export const createDeliveryStore = (
  initState: DeliveryState = defaultInitState
) => {
  return createStore<DeliveryStore>()((set) => ({
    ...initState,
    setStep: (step) => set({ step }),
    setDistances: (distances) => set({ distances }),
    setNodes: (nodes) => set({ nodes }),
    setConfig: (config) => set({ config }),
  }));
};
