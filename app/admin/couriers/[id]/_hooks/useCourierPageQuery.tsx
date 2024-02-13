import { useParams } from "next/navigation";

const useCourierPageQuery = () => {
  const { id } = useParams<{
    id: string;
  }>();

  return {
    id: id || "",
  };
};

export default useCourierPageQuery;
