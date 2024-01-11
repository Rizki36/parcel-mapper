import { PostBranchAreasBody } from "@/api/branch/[id]/area/route";
import axiosInstance from "../../_libs/axios";
import { useMutation } from "@tanstack/react-query";

type Data = PostBranchAreasBody & { id: string };

const usePostBranchAreaMutation = () => {
  return useMutation({
    mutationFn: async ({ id, ...data }: Data) => {
      const res = await axiosInstance.post(`/api/branch/${id}/area`, data);

      return res.data;
    },
  });
};

export default usePostBranchAreaMutation;
