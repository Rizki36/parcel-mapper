import React, { createContext, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import {
  DeleteBranchAdminStore,
  createDeleteBranchAdminStore,
  defaultInitState,
} from "../_stores/delete-branch-admin-store";

export const DeleteBranchAdminContext =
  createContext<StoreApi<DeleteBranchAdminStore> | null>(null);

export interface DeleteBranchAdminProviderProps {
  children: React.ReactNode;
}

export const DeleteBranchAdminProvider = ({
  children,
}: DeleteBranchAdminProviderProps) => {
  const storeRef = useRef<StoreApi<DeleteBranchAdminStore>>();
  if (!storeRef.current) {
    storeRef.current = createDeleteBranchAdminStore(defaultInitState);
  }

  return (
    <DeleteBranchAdminContext.Provider value={storeRef.current}>
      {children}
    </DeleteBranchAdminContext.Provider>
  );
};

export const useDeleteBranchAdminStore = <T,>(
  selector: (_store: DeleteBranchAdminStore) => T
): T => {
  const deleteBranchAdminStoreContext = useContext(DeleteBranchAdminContext);

  if (!deleteBranchAdminStoreContext) {
    throw new Error(
      `useDeleteBranchAdminStore must be use within DeleteBranchAdminProvider`
    );
  }

  return useStore(deleteBranchAdminStoreContext, selector);
};
