import { ParcelKeyGenerator } from "@/_utils/keyGenerator";
import axiosInstance from "../../_libs/axios";
import { BuildPaginatedResponse } from "../../_utils/responseBuilder";
import { Parcel } from "@prismaorm/generated/client";
import { useQuery } from "@tanstack/react-query";

const useParcelsQuery = (props: {
  pageSize: number;
  pageIndex: number;
  search?: string;
  statuses?: string[];
  courierId?: string;
}) => {
  const fetchDataOptions = {
    pageIndex: props.pageIndex,
    pageSize: props.pageSize,
    search: props.search,
    statuses: props.statuses,
    courierId: props.courierId,
  };

  const dataQuery = useQuery({
    queryKey: [...ParcelKeyGenerator.list(), fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<BuildPaginatedResponse<Parcel>>(
        "/api/parcel",
        {
          params: fetchDataOptions,
        }
      );

      return res.data;
    },
  });

  return dataQuery;
};

export default useParcelsQuery;
