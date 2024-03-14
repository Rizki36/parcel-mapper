import { ParcelKeyGenerator } from "@/_utils/keyGenerator";
import axiosInstance from "../../_libs/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteParcelMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      const res = await axiosInstance.delete(`/api/parcel/${id}`);

      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ParcelKeyGenerator.all],
      });
    },
  });
};

export default useDeleteParcelMutation;
