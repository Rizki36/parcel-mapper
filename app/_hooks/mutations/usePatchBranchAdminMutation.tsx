import { BranchAdminKeyGenerator } from "@/_utils/keyGenerator";
import axiosInstance from "../../_libs/axios";
import { BranchAdmin } from "@prismaorm/generated/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Data = Partial<BranchAdmin> & { id: string };

const usePatchBranchAdminMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...data }: Data) => {
      const res = await axiosInstance.patch(`/api/branch-admin/${id}`, data);

      return res.data;
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [BranchAdminKeyGenerator.all],
      });
    },
  });
};

export default usePatchBranchAdminMutation;
