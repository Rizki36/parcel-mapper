import { ParcelKeyGenerator } from "@/_utils/keyGenerator";
import axiosInstance from "../../_libs/axios";
import { useQuery } from "@tanstack/react-query";
import { GetOneParcelResponse } from "@/api/parcel/[id]/route";

type UseParcelQueryProps = {
  id: string;
  with?: "courier"[];
};

const useParcelQuery = (props: UseParcelQueryProps) => {
  const fetchDataOptions = { id: props.id, with: props.with };

  const dataQuery = useQuery({
    queryKey: [...ParcelKeyGenerator.one(props.id), fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<GetOneParcelResponse>(
        `/api/parcel/${props.id}`,
        {
          params: fetchDataOptions,
        }
      );

      return res.data;
    },
    enabled: !!props.id,
  });

  return dataQuery;
};

export default useParcelQuery;
