import { MappingResponseData } from "@/api/mapping/route";
import axiosInstance from "../../_libs/axios";
import { BuildResponse } from "../../_utils/responseBuilder";
import { useQuery } from "@tanstack/react-query";

type GetMappingResponse = BuildResponse<MappingResponseData>;

const useMappingQuery = () => {
  const dataQuery = useQuery({
    queryKey: ["/api/mapping"],
    queryFn: async () => {
      const res = await axiosInstance.get<GetMappingResponse>("/api/mapping");

      return res.data;
    },
  });

  return dataQuery;
};

export default useMappingQuery;
