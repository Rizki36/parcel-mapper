import axiosInstance from "../../../_libs/axios";
import { useMutation } from "@tanstack/react-query";
import { CrateCourierBody } from "@/api/courier/route";

const usePostCourierMutation = () => {
  return useMutation({
    mutationFn: async (props: CrateCourierBody) => {
      const res = await axiosInstance.post(`/api/courier`, props);

      return res.data;
    },
  });
};

export default usePostCourierMutation;
