import { createStore } from "zustand";

type DeleteCourierState = {
  id: string | null;
  open: boolean;
};

export type DeleteCourierActions = {
  setState: (_state: DeleteCourierState) => void;
  resetState: () => void;
};

export type DeleteCourierStore = DeleteCourierState & DeleteCourierActions;

export const defaultInitState: DeleteCourierState = {
  id: null,
  open: false,
};

export const createDeleteCourierStore = (
  initState: DeleteCourierState = defaultInitState
) => {
  return createStore<DeleteCourierStore>()((set) => ({
    ...initState,
    setState: (state) => set(state),
    resetState: () => set(defaultInitState),
  }));
};
