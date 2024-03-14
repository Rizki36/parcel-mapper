import { BranchKeyGenerator } from "@/_utils/keyGenerator";
import axiosInstance from "../../_libs/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteBranchMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      const res = await axiosInstance.delete(`/api/branch/${id}`);

      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [BranchKeyGenerator.all],
      });
    },
  });
};

export default useDeleteBranchMutation;
