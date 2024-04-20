import useCourierQuery from "@/_hooks/queries/useCourierQuery";
import useCourierPageQuery from "./useCourierPageQuery";

const useCourierData = () => {
  const { id } = useCourierPageQuery();
  const { data, isLoading: loadingCourier } = useCourierQuery({
    id,
    with: ["branch", "user"],
  });

  const courier = data?.data?.doc;

  return {
    courier,
    loadingCourier,
  };
};

export default useCourierData;
