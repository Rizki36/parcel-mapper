import axiosInstance from "@/app/_libs/axios";
import { BuildResponse } from "@/app/_utils/responseBuilder";
import { Parcel } from "@prismaorm/generated/client";
import { useQuery } from "@tanstack/react-query";

const useParcelQuery = (props: { id: string }) => {
  const dataQuery = useQuery({
    queryKey: ["/api/parcel", { id: props.id }],
    queryFn: async () => {
      const res = await axiosInstance.get<
        BuildResponse<{
          doc: Parcel;
        }>
      >(`/api/parcel/${props.id}`);

      return res.data;
    },
    enabled: !!props.id,
  });

  return dataQuery;
};

export default useParcelQuery;
