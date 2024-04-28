import { createStore } from "zustand/vanilla";
import { DirectionData } from "../_hooks";
import { RouteProfile } from "../_hooks/useRequestDirections";

export type Node = {
  id: number;
  lat: number;
  lng: number;
  type: "branch" | "customer";
  recipientName: string;
  recipientNumber: string;
  recipientAddress: string;
  visited: boolean;
};

export type RouteItem = {
  id: number;
  visited: boolean;
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
  route: RouteItem[];
  nodeDetailId: number | null;
  directions: Record<string, DirectionData>;
  routeProfile: RouteProfile;
};

export type DeliveryActions = {
  setStep: (_number: number) => void;
  setDistances: (_distances: number[][]) => void;
  setNodes: (_nodes: Node[]) => void;
  setConfig: (_config: DeliveryState["config"]) => void;
  setRoute: (_route: RouteItem[]) => void;
  setNodeDetailId: (_nodeDetailId: DeliveryState["nodeDetailId"]) => void;
  setDirections: (_directions: DeliveryState["directions"]) => void;
  setRouteProfile: (_routeProfile: RouteProfile) => void;
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
  route: [],
  nodeDetailId: null,
  directions: {},
  routeProfile: "cycling",
};

export const createDeliveryStore = (
  initState: DeliveryState = defaultInitState
) => {
  return createStore<DeliveryStore>()((set) => ({
    ...initState,
    setStep: (step) => set({ step }),
    setDistances: (distances) => set({ distances, route: [] }),
    setNodes: (nodes) => set({ nodes }),
    setConfig: (config) => set({ config }),
    setRoute: (route) => set({ route }),
    setNodeDetailId: (nodeDetailId) => set({ nodeDetailId }),
    setDirections: (directions) => set({ directions }),
    setRouteProfile: (routeProfile) => set({ routeProfile }),
  }));
};
