import axiosInstance from "../../_libs/axios";
import { useMutation } from "@tanstack/react-query";
import { CrateCourierBody } from "@/api/courier/route";

const usePostCourierMutation = () => {
  return useMutation({
    mutationFn: async (data: CrateCourierBody) => {
      const res = await axiosInstance.post(`/api/courier`, data);

      return res.data;
    },
  });
};

export default usePostCourierMutation;
