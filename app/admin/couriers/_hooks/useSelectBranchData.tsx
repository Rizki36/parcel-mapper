import useBranchQuery from "@/_hooks/queries/useBranchQuery";
import useCouriersPageSearchParams from "./useCouriersPageSearchParams";

const useSelectBranchData = () => {
  const { branchId } = useCouriersPageSearchParams();

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
