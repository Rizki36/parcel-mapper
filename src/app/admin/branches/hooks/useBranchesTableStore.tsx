import { ParcelStatus } from "@/types";
import { create } from "zustand";

const useBranchesTableStore = create<{
  search: string;
  setSearch: (search: string) => void;
  statuses: ParcelStatus[];
  setStatuses: (statuses: ParcelStatus[]) => void;
}>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  statuses: [],
  setStatuses: (statuses) => set({ statuses }),
}));

export default useBranchesTableStore;
