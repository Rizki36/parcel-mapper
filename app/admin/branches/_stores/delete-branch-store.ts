import { createStore } from "zustand";

type DeleteBranchState = {
  id: string | null;
  open: boolean;
};

type DeleteBranchAction = {
  setState: (_state: DeleteBranchState) => void;
  resetState: () => void;
};

export type DeleteBranchStore = DeleteBranchState & DeleteBranchAction;

export const initialState: DeleteBranchState = {
  id: null,
  open: false,
};

export const createDeleteBranchStore = (
  initState: DeleteBranchState = initialState
) => {
  return createStore<DeleteBranchStore>((set) => ({
    ...initState,
    setState: (state) => set(state),
    resetState: () => set(initialState),
  }));
};
