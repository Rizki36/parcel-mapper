import useBranchQuery from "@/admin/branches/_hooks/useBranchQuery";
import usePageParams from "./usePageParams";

const useSelectBranchData = () => {
  const { branchId } = usePageParams();

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
