import { CreateBody } from "@/api/parcel/route";
import axiosInstance from "../../../_libs/axios";
import { useMutation } from "@tanstack/react-query";

const usePostParcelMutation = () => {
  return useMutation({
    mutationFn: async (props: CreateBody) => {
      const res = await axiosInstance.post(`/api/parcel`, props);

      return res.data;
    },
  });
};

export default usePostParcelMutation;
