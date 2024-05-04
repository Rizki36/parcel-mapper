import axiosInstance from "@/_libs/axios";
import { HomePageKeyGenerator } from "@/_utils/keyGenerator";
import { GetAdminHomePageStatResponse } from "@/api/admin-home-page/stat/route";
import { useQuery } from "@tanstack/react-query";

const useAdminHomePageStatQuery = (props: { branchId?: string } = {}) => {
  const fetchDataOptions = {
    branchId: props.branchId || undefined,
  };
  const dataQuery = useQuery({
    queryKey: [...HomePageKeyGenerator.stat(), fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<GetAdminHomePageStatResponse>(
        `/api/admin-home-page/stat`,
        {
          params: fetchDataOptions,
        }
      );

      return res.data;
    },
  });

  return dataQuery;
};

export default useAdminHomePageStatQuery;
