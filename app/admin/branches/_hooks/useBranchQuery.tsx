import axiosInstance from "@/_libs/axios";
import { BuildResponse } from "@/_utils/responseBuilder";
import { Branch } from "@prismaorm/generated/client";
import { useQuery } from "@tanstack/react-query";

const useBranchQuery = (props: { id: string }) => {
  const dataQuery = useQuery({
    queryKey: ["/api/branch", { id: props.id }],
    queryFn: async () => {
      const res = await axiosInstance.get<
        BuildResponse<{
          doc: Branch;
        }>
      >(`/api/branch/${props.id}`);

      return res.data;
    },
    enabled: !!props.id,
  });

  return dataQuery;
};

export default useBranchQuery;
