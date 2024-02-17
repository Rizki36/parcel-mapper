"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";
import {
  DeliveryStore,
  createDeliveryStore,
  initDeliveryStore,
} from "../_stores/delivery-store";

export const DeliveryStoreContext =
  createContext<StoreApi<DeliveryStore> | null>(null);

export interface DeliveryStoreProviderProps {
  children: ReactNode;
}

export const DeliveryStoreProvider = ({
  children,
}: DeliveryStoreProviderProps) => {
  const storeRef = useRef<StoreApi<DeliveryStore>>();
  if (!storeRef.current) {
    storeRef.current = createDeliveryStore(initDeliveryStore());
  }

  return (
    <DeliveryStoreContext.Provider value={storeRef.current}>
      {children}
    </DeliveryStoreContext.Provider>
  );
};

export const useDeliveryStore = <T,>(
  selector: (_store: DeliveryStore) => T
): T => {
  const deliveryStoreContext = useContext(DeliveryStoreContext);

  if (!deliveryStoreContext) {
    throw new Error(
      `useDeliveryStore must be use within DeliveryStoreProvider`
    );
  }

  return useStore(deliveryStoreContext, selector);
};
