"use client";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
import {
  MappingStore,
  createMappingStore,
  defaultInitState,
} from "../_stores/mapping-store";

export const MappingStoreContext = createContext<StoreApi<MappingStore> | null>(
  null
);

export interface MappingStoreProviderProps {
  children: ReactNode;
}

export const MappingStoreProvider = ({
  children,
}: MappingStoreProviderProps) => {
  const storeRef = useRef<StoreApi<MappingStore>>();
  if (!storeRef.current) {
    storeRef.current = createMappingStore(defaultInitState);
  }

  return (
    <MappingStoreContext.Provider value={storeRef.current}>
      {children}
    </MappingStoreContext.Provider>
  );
};

export const useMappingStore = <T,>(
  selector: (_store: MappingStore) => T
): T => {
  const storeContext = useContext(MappingStoreContext);

  if (!storeContext) {
    throw new Error(`useMappingStore must be use within MappingStoreProvider`);
  }

  return useStore(storeContext, selector);
};
