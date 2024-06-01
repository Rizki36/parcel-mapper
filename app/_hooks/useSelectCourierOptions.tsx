import { useMemo } from "react";
import useCouriersQuery from "./queries/useCouriersQuery";

// TODO: create infinite scroll
const useSelectCourierOptions = () => {
  const dataQuery = useCouriersQuery({
    pageIndex: 0,
    pageSize: 100,
  });

  const options = useMemo(() => {
    if (!dataQuery.data?.data?.docs) return [];

    return dataQuery.data?.data?.docs.map((courier) => ({
      value: courier.id,
      label: courier.name,
    }));
  }, [dataQuery.data?.data?.docs]);

  return {
    courierOptions: options,
    loadingCourierOptions: dataQuery.isLoading,
  };
};

export default useSelectCourierOptions;
