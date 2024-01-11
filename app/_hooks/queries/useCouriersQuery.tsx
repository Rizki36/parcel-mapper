import { CourierKeyGenerator } from "@/_utils/keyGenerator";
import axiosInstance from "../../_libs/axios";
import { BuildPaginatedResponse } from "../../_utils/responseBuilder";
import { Courier } from "@prismaorm/generated/client";
import { useQuery } from "@tanstack/react-query";

type UseCouriersQueryProps = {
  pageSize: number;
  pageIndex: number;
  search?: string;
  with?: "branch"[];
  branchId?: string;
};

type GetCouriersResponse = BuildPaginatedResponse<Courier>;

const useCouriersQuery = (props: UseCouriersQueryProps) => {
  const fetchDataOptions = {
    pageIndex: props.pageIndex,
    pageSize: props.pageSize,
    search: props.search || undefined,
    with: props.with || undefined,
    branchId: props.branchId || undefined,
  };

  const dataQuery = useQuery({
    queryKey: [...CourierKeyGenerator.list(), fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<GetCouriersResponse>("/api/courier", {
        params: fetchDataOptions,
      });

      return res.data;
    },
  });

  return dataQuery;
};

export default useCouriersQuery;
