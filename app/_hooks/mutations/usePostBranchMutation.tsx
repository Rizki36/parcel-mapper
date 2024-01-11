import { CrateBranchBody } from "@/api/branch/route";
import axiosInstance from "../../_libs/axios";
import { useMutation } from "@tanstack/react-query";

const usePostBranchMutation = () => {
  return useMutation({
    mutationFn: async (props: CrateBranchBody) => {
      const res = await axiosInstance.post(`/api/branch`, props);

      return res.data;
    },
  });
};

export default usePostBranchMutation;
