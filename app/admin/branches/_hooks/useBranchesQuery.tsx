import axiosInstance from "../../../_libs/axios";
import { BuildPaginatedResponse } from "../../../_utils/responseBuilder";
import { Branch } from "@prismaorm/generated/client";
import { useQuery } from "@tanstack/react-query";

const useBranchesQuery = (props: {
  pageSize: number;
  pageIndex: number;
  search?: string;
}) => {
  const fetchDataOptions = {
    pageIndex: props.pageIndex,
    pageSize: props.pageSize,
    search: props.search,
  };

  const dataQuery = useQuery({
    queryKey: ["/api/branch", fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<BuildPaginatedResponse<Branch>>(
        "/api/branch",
        {
          params: fetchDataOptions,
        }
      );

      return res.data;
    },
  });

  return dataQuery;
};

export default useBranchesQuery;
