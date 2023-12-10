import axiosInstance from "@/libs/axios";
import { Parcel } from "@prismaorm/generated/client";
import { useMutation } from "@tanstack/react-query";

const usePatchParcelMutation = () => {
  return useMutation({
    mutationFn: async (props: { id: string; data: Partial<Parcel> }) => {
      const res = await axiosInstance.patch(
        `/api/parcel/${props.id}`,
        props.data
      );

      return res.data;
    },
  });
};

export default usePatchParcelMutation;
