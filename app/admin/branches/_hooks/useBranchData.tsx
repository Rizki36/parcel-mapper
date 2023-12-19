import { useParams } from "next/navigation";
import useBranchQuery from "./useBranchQuery";

const useBranchData = () => {
  const { id } = useParams<{
    id: string;
  }>();

  const {
    data,
    isLoading: loadingBranch,
    refetch: refetchBranch,
  } = useBranchQuery({
    id,
  });
  const branch = data?.data?.doc;

  return {
    branch,
    loadingBranch,
    refetchBranch,
  };
};

export default useBranchData;
