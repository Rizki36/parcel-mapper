import { BranchAdminKeyGenerator } from "@/_utils/keyGenerator";
import axiosInstance from "../../_libs/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteBranchAdminMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      const res = await axiosInstance.delete(`/api/branch-admin/${id}`);

      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [BranchAdminKeyGenerator.all],
      });
    },
  });
};

export default useDeleteBranchAdminMutation;
