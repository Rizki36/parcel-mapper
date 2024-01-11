import useBranchQuery from "../../../_hooks/queries/useBranchQuery";
import useBranchPageSearchParams from "./useBranchPageSearchParams";

const useBranchData = () => {
  const { id } = useBranchPageSearchParams();

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
