import React, { createContext, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import {
  DeleteCourierStore,
  createDeleteCourierStore,
  defaultInitState,
} from "../_states/delete-courier-state";

export const DeleteCourierContext =
  createContext<StoreApi<DeleteCourierStore> | null>(null);

export interface DeleteCourierProviderProps {
  children: React.ReactNode;
}

export const DeleteCourierProvider = ({
  children,
}: DeleteCourierProviderProps) => {
  const storeRef = useRef<StoreApi<DeleteCourierStore>>();
  if (!storeRef.current) {
    storeRef.current = createDeleteCourierStore(defaultInitState);
  }

  return (
    <DeleteCourierContext.Provider value={storeRef.current}>
      {children}
    </DeleteCourierContext.Provider>
  );
};

export const useDeleteCourierStore = <T,>(
  selector: (_store: DeleteCourierStore) => T
): T => {
  const deleteCourierStoreContext = useContext(DeleteCourierContext);

  if (!deleteCourierStoreContext) {
    throw new Error(
      `useDeleteCourierStore must be use within DeleteCourierProvider`
    );
  }

  return useStore(deleteCourierStoreContext, selector);
};
