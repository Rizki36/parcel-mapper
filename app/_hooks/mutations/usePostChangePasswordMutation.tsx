import axiosInstance from "../../_libs/axios";
import { useMutation } from "@tanstack/react-query";
import { ChangePasswordBody } from "@/api/auth/change-password/route";

const usePostChangePasswordMutation = () => {
  return useMutation({
    mutationFn: async (props: ChangePasswordBody) => {
      const res = await axiosInstance.post(`/api/auth/change-password`, props);

      return res.data;
    },
  });
};

export default usePostChangePasswordMutation;
