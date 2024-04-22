import axiosInstance from "@/_libs/axios";
import { BranchKeyGenerator } from "@/_utils/keyGenerator";
import { BuildResponse } from "@/_utils/responseBuilder";
import { GetOneBranchData } from "@/api/branch/[id]/route";
import { useQuery } from "@tanstack/react-query";

type UseBranchQueryProps = {
  id: string;
  with?: "area"[];
  enabled?: boolean;
};

type GetOneBranchResponse = BuildResponse<{
  doc: GetOneBranchData;
}>;

const useBranchQuery = (props: UseBranchQueryProps) => {
  const fetchDataOptions = {
    id: props.id,
    with: props.with || undefined,
  };

  const dataQuery = useQuery({
    queryKey: [...BranchKeyGenerator.one(props.id), fetchDataOptions],
    queryFn: async () => {
      const { id, ...params } = fetchDataOptions;
      const res = await axiosInstance.get<GetOneBranchResponse>(
        `/api/branch/${id}`,
        {
          params,
        }
      );

      return res.data;
    },
    enabled: typeof props.enabled === "boolean" ? props.enabled : !!props.id,
  });

  return dataQuery;
};

export default useBranchQuery;
