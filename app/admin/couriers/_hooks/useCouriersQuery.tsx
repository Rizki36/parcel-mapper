import axiosInstance from "../../../_libs/axios";
import { BuildPaginatedResponse } from "../../../_utils/responseBuilder";
import { Courier } from "@prismaorm/generated/client";
import { useQuery } from "@tanstack/react-query";

const useCouriersQuery = (props: {
  pageSize: number;
  pageIndex: number;
  search?: string;
  with?: "branch"[];
  branchId?: string;
}) => {
  const fetchDataOptions = {
    pageIndex: props.pageIndex,
    pageSize: props.pageSize,
    search: props.search || undefined,
    with: props.with || undefined,
    branchId: props.branchId || undefined,
  };

  const dataQuery = useQuery({
    queryKey: ["/api/courier", fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<BuildPaginatedResponse<Courier>>(
        "/api/courier",
        {
          params: fetchDataOptions,
        }
      );

      return res.data;
    },
  });

  return dataQuery;
};

export default useCouriersQuery;
