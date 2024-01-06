import axiosInstance from "../../_libs/axios";
import { Branch } from "@prismaorm/generated/client";
import { useMutation } from "@tanstack/react-query";

type Data = Partial<Branch> & { id: string };

const usePatchBranchMutation = () => {
  return useMutation({
    mutationFn: async ({ id, ...data }: Data) => {
      const res = await axiosInstance.patch(`/api/branch/${id}`, data);

      return res.data;
    },
  });
};

export default usePatchBranchMutation;
