import axiosInstance from "@/_libs/axios";
import { BuildResponse } from "@/_utils/responseBuilder";
import { GetOneBranchData } from "@/api/branch/[id]/route";
import { useQuery } from "@tanstack/react-query";

const useBranchQuery = (props: { id: string }) => {
  const dataQuery = useQuery({
    queryKey: ["/api/branch", { id: props.id }],
    queryFn: async () => {
      const res = await axiosInstance.get<
        BuildResponse<{
          doc: GetOneBranchData;
        }>
      >(`/api/branch/${props.id}`);

      return res.data;
    },
    enabled: !!props.id,
  });

  return dataQuery;
};

export default useBranchQuery;
