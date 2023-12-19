import { PostBranchAreasBody } from "@/api/branch/[id]/area/route";
import axiosInstance from "../../../_libs/axios";
import { useMutation } from "@tanstack/react-query";

const usePostBranchAreaMutation = () => {
  return useMutation({
    mutationFn: async (props: { id: string; data: PostBranchAreasBody }) => {
      const res = await axiosInstance.post(
        `/api/branch/${props.id}/area`,
        props.data
      );

      return res.data;
    },
  });
};

export default usePostBranchAreaMutation;
