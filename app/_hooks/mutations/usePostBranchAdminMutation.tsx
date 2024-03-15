import axiosInstance from "../../_libs/axios";
import { useMutation } from "@tanstack/react-query";
import { CrateCourierBody } from "@/api/courier/route";

const usePostBranchAdminMutation = () => {
  return useMutation({
    mutationFn: async (data: CrateCourierBody) => {
      const res = await axiosInstance.post(`/api/branch-admin`, data);

      return res.data;
    },
  });
};

export default usePostBranchAdminMutation;
