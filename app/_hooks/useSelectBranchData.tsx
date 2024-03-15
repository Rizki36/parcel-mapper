import useBranchQuery from "@/_hooks/queries/useBranchQuery";

const useSelectBranchData = ({ branchId }: { branchId: string }) => {
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
