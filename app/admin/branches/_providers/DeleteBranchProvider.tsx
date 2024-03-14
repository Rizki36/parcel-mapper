import React, { createContext, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import {
  DeleteBranchStore,
  createDeleteBranchStore,
  initialState,
} from "../_stores/delete-branch-store";

const DeleteBranchContext = createContext<StoreApi<DeleteBranchStore> | null>(
  null
);

export interface DeleteBranchProviderProps {
  children: React.ReactNode;
}

export const DeleteBranchProvider = ({
  children,
}: DeleteBranchProviderProps) => {
  const stateRef = useRef<StoreApi<DeleteBranchStore>>();

  if (!stateRef.current) {
    stateRef.current = createDeleteBranchStore(initialState);
  }

  return (
    <DeleteBranchContext.Provider value={stateRef.current}>
      {children}
    </DeleteBranchContext.Provider>
  );
};

export const useDeleteBranchStore = <T,>(
  selector: (_store: DeleteBranchStore) => T
): T => {
  const context = useContext(DeleteBranchContext);

  if (!context) {
    throw new Error(
      `useDeleteBranchStore must be use within DeleteBranchProvider`
    );
  }

  return useStore(context, selector);
};
