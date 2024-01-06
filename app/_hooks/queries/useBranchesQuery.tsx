import axiosInstance from "../../_libs/axios";
import { BuildPaginatedResponse } from "../../_utils/responseBuilder";
import { Branch } from "@prismaorm/generated/client";
import { useQuery } from "@tanstack/react-query";

type UseBranchesQueryProps = {
  pageSize: number;
  pageIndex: number;
  search?: string;
};

type GetBranchesResponse = BuildPaginatedResponse<Branch>;

const useBranchesQuery = (props: UseBranchesQueryProps) => {
  const fetchDataOptions = {
    pageIndex: props.pageIndex,
    pageSize: props.pageSize,
    search: props.search,
  };

  const dataQuery = useQuery({
    queryKey: ["/api/branch", fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<GetBranchesResponse>("/api/branch", {
        params: fetchDataOptions,
      });

      return res.data;
    },
  });

  return dataQuery;
};

export default useBranchesQuery;
