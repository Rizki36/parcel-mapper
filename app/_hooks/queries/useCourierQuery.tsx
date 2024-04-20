import axiosInstance from "@/_libs/axios";
import { CourierKeyGenerator } from "@/_utils/keyGenerator";
import { BuildResponse } from "@/_utils/responseBuilder";
import {
  GetOneCourierData,
  QueryWithGetOneCourierData,
} from "@/api/courier/[id]/route";
import { useQuery } from "@tanstack/react-query";

type UseCourierQueryProps = {
  id: string;
  with?: QueryWithGetOneCourierData[];
};

type GetOneCourierResponse = BuildResponse<{
  doc: GetOneCourierData;
}>;

const useCourierQuery = (props: UseCourierQueryProps) => {
  const fetchDataOptions = {
    id: props.id,
    with: props.with,
  };

  const dataQuery = useQuery({
    queryKey: [...CourierKeyGenerator.one(props.id), fetchDataOptions],
    queryFn: async () => {
      const { id, ...params } = fetchDataOptions;
      const res = await axiosInstance.get<GetOneCourierResponse>(
        `/api/courier/${id}`,
        {
          params,
        }
      );

      return res.data;
    },
    enabled: !!props.id,
  });

  return dataQuery;
};

export default useCourierQuery;
