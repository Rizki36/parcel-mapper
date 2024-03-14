import { CourierKeyGenerator } from "@/_utils/keyGenerator";
import axiosInstance from "../../_libs/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteCourierMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      const res = await axiosInstance.delete(`/api/courier/${id}`);

      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CourierKeyGenerator.all],
      });
    },
  });
};

export default useDeleteCourierMutation;
