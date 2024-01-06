import axiosInstance from "../../_libs/axios";
import { Parcel } from "@prismaorm/generated/client";
import { useMutation } from "@tanstack/react-query";

type Data = Partial<Parcel> & { id: string };

const usePatchParcelMutation = () => {
  return useMutation({
    mutationFn: async ({ id, ...data }: Data) => {
      const res = await axiosInstance.patch(`/api/parcel/${id}`, data);

      return res.data;
    },
  });
};

export default usePatchParcelMutation;
