import axiosInstance from "../../_libs/axios";
import { useMutation } from "@tanstack/react-query";
import { UpdateCourierBody } from "@/api/courier/[id]/route";

type Data = Partial<UpdateCourierBody> & { id: string };

const usePatchCourierMutation = () => {
  return useMutation({
    mutationFn: async ({ id, ...data }: Data) => {
      const res = await axiosInstance.patch(`/api/courier/${id}`, data);

      return res.data;
    },
  });
};

export default usePatchCourierMutation;
