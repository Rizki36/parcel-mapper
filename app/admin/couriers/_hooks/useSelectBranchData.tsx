import useBranchQuery from "@/_hooks/queries/useBranchQuery";
import useCouriersPageQuery from "./useCouriersPageQuery";

const useSelectBranchData = () => {
  const { branchId } = useCouriersPageQuery();

  const { data, isLoading: loadingBranch } = useBranchQuery({
    id: branchId,
  });
  const branch = data?.data?.doc;

  return {
    branch,
    loadingBranch,
  };
};

export default useSelectBranchData;
