import axiosInstance from "@/_libs/axios";
import { HomePageKeyGenerator } from "@/_utils/keyGenerator";
import { GetHomePageStatResponse } from "@/api/home-page/stat/route";
import { useQuery } from "@tanstack/react-query";

const useHomePageStatQuery = (props: { branchId?: string } = {}) => {
  const fetchDataOptions = {
    branchId: props.branchId || undefined,
  };
  const dataQuery = useQuery({
    queryKey: [...HomePageKeyGenerator.stat(), fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<GetHomePageStatResponse>(
        `/api/home-page/stat`,
        {
          params: fetchDataOptions,
        }
      );

      return res.data;
    },
  });

  return dataQuery;
};

export default useHomePageStatQuery;
