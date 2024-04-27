import { createStore } from "zustand/vanilla";

export type MappingState = {
  config: {
    alpha: number;
    beta: number;
    rho: number;
    salesman: number;
    iterations: number;
  };
};

export type DeliveryActions = {
  setConfig: (_config: MappingState["config"]) => void;
};

export type MappingStore = MappingState & DeliveryActions;

export const defaultInitState: MappingState = {
  config: {
    alpha: 1,
    beta: 2,
    rho: 0.5,
    salesman: 10,
    iterations: 100,
  },
};

export const createMappingStore = (
  initState: MappingState = defaultInitState
) => {
  return createStore<MappingStore>()((set) => ({
    ...initState,
    setConfig: (config) => set({ config }),
  }));
};
