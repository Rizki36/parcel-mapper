import { ReactNode, createContext, useContext, useRef } from "react";
import { StoreApi, useStore } from "zustand";
import {
  DeleteParcelStore,
  createDeleteParcelStore,
  defaultInitState,
} from "../_stores/delete-parcel-store";

export const DeleteParcelContext =
  createContext<StoreApi<DeleteParcelStore> | null>(null);

export interface DeleteParcelProviderProps {
  children: ReactNode;
}

export const DeleteParcelProvider = ({
  children,
}: DeleteParcelProviderProps) => {
  const storeRef = useRef<StoreApi<DeleteParcelStore>>();
  if (!storeRef.current) {
    storeRef.current = createDeleteParcelStore(defaultInitState);
  }

  return (
    <DeleteParcelContext.Provider value={storeRef.current}>
      {children}
    </DeleteParcelContext.Provider>
  );
};

export const useDeleteParcelStore = <T,>(
  selector: (_store: DeleteParcelStore) => T
): T => {
  const deleteParcelStoreContext = useContext(DeleteParcelContext);

  if (!deleteParcelStoreContext) {
    throw new Error(
      `useDeleteParcelStore must be use within DeleteParcelProvider`
    );
  }

  return useStore(deleteParcelStoreContext, selector);
};
