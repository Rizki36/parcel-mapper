import { useParams } from "next/navigation";
import useBranchQuery from "../../../_hooks/queries/useBranchQuery";

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
    with: ["area"],
  });
  const branch = data?.data?.doc;

  return {
    branch,
    loadingBranch,
    refetchBranch,
  };
};

export default useBranchData;
