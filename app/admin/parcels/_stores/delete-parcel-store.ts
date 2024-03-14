import { createStore } from "zustand";

type DeleteParcelState = {
  id: string | null;
  open: boolean;
};

export type DeleteParcelActions = {
  setState: (_state: DeleteParcelState) => void;
  resetState: () => void;
};

export type DeleteParcelStore = DeleteParcelState & DeleteParcelActions;

export const defaultInitState: DeleteParcelState = {
  id: null,
  open: false,
};

export const createDeleteParcelStore = (
  initState: DeleteParcelState = defaultInitState
) => {
  return createStore<DeleteParcelStore>()((set) => ({
    ...initState,
    setState: (state) => set(state),
    resetState: () => set(defaultInitState),
  }));
};
