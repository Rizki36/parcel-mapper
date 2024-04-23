import { ParcelKeyGenerator } from "@/_utils/keyGenerator";
import axiosInstance from "../../_libs/axios";
import { useQuery } from "@tanstack/react-query";
import {
  GetParcelsResponse,
  QueryStatusesGetParcels,
  QueryWithGetParcelsData,
} from "@/api/parcel/route";

const useParcelsQuery = (props: {
  pageSize: number;
  pageIndex: number;
  search?: string;
  statuses?: QueryStatusesGetParcels;
  courierId?: string;
  branchId?: string;
  with?: QueryWithGetParcelsData[];
  enable?: boolean;
}) => {
  const fetchDataOptions = {
    pageIndex: props.pageIndex,
    pageSize: props.pageSize,
    search: props.search,
    statuses: props.statuses,
    courierId: props.courierId,
    branchId: props.branchId,
    with: props.with,
  };

  const dataQuery = useQuery({
    queryKey: [...ParcelKeyGenerator.list(), fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<GetParcelsResponse>("/api/parcel", {
        params: fetchDataOptions,
      });

      return res.data;
    },
    enabled: props.enable,
  });

  return dataQuery;
};

export default useParcelsQuery;
