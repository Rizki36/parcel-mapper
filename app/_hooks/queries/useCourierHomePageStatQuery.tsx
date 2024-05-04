import axiosInstance from "@/_libs/axios";
import { HomePageKeyGenerator } from "@/_utils/keyGenerator";
import { GetCourierHomePageStatResponse } from "@/api/courier-home-page/stat/route";
import { useQuery } from "@tanstack/react-query";

const useCourierHomePageStatQuery = (props: { courierId?: string } = {}) => {
  const fetchDataOptions = {
    courierId: props.courierId || undefined,
  };
  const dataQuery = useQuery({
    queryKey: [...HomePageKeyGenerator.stat(), fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<GetCourierHomePageStatResponse>(
        `/api/courier-home-page/stat`,
        {
          params: fetchDataOptions,
        }
      );

      return res.data;
    },
  });

  return dataQuery;
};

export default useCourierHomePageStatQuery;
