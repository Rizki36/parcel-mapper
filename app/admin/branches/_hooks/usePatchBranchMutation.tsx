import axiosInstance from "../../../_libs/axios";
import { Branch } from "@prismaorm/generated/client";
import { useMutation } from "@tanstack/react-query";

const usePatchBranchMutation = () => {
  return useMutation({
    mutationFn: async (props: { id: string; data: Partial<Branch> }) => {
      const res = await axiosInstance.patch(
        `/api/branch/${props.id}`,
        props.data
      );

      return res.data;
    },
  });
};

export default usePatchBranchMutation;
