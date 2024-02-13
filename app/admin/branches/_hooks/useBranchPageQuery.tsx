import { useParams } from "next/navigation";

const useBranchPageQuery = () => {
  const { id } = useParams<{
    id: string;
  }>();

  return {
    id: id || "",
  };
};

export default useBranchPageQuery;
