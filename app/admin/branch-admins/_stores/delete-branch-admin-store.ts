import { createStore } from "zustand";

type DeleteBranchAdminState = {
  id: string | null;
  open: boolean;
};

export type DeleteBranchAdminActions = {
  setState: (_state: DeleteBranchAdminState) => void;
  resetState: () => void;
};

export type DeleteBranchAdminStore = DeleteBranchAdminState &
  DeleteBranchAdminActions;

export const defaultInitState: DeleteBranchAdminState = {
  id: null,
  open: false,
};

export const createDeleteBranchAdminStore = (
  initState: DeleteBranchAdminState = defaultInitState
) => {
  return createStore<DeleteBranchAdminStore>()((set) => ({
    ...initState,
    setState: (state) => set(state),
    resetState: () => set(defaultInitState),
  }));
};
