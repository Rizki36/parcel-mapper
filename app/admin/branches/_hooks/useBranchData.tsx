import useBranchQuery from "@/_hooks/queries/useBranchQuery";
import useBranchPageQuery from "./useBranchPageQuery";

const useBranchData = () => {
  const { id } = useBranchPageQuery();

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
