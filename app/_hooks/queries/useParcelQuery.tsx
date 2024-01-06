import axiosInstance from "../../_libs/axios";
import { BuildResponse } from "../../_utils/responseBuilder";
import { Parcel } from "@prismaorm/generated/client";
import { useQuery } from "@tanstack/react-query";

type UseParcelQueryProps = {
  id: string;
};

type GetOneParcelResponse = BuildResponse<{
  doc: Parcel;
}>;

const useParcelQuery = (props: UseParcelQueryProps) => {
  const fetchDataOptions = { id: props.id };

  const dataQuery = useQuery({
    queryKey: ["/api/parcel", fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<GetOneParcelResponse>(
        `/api/parcel/${props.id}`
      );

      return res.data;
    },
    enabled: !!props.id,
  });

  return dataQuery;
};

export default useParcelQuery;
