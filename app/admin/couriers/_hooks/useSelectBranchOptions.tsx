import useBranchesQuery from "@/admin/branches/_hooks/useBranchesQuery";
import { useMemo } from "react";

// TODO: create infinite scroll
const useSelectBranchOptions = () => {
  const dataQuery = useBranchesQuery({
    pageIndex: 0,
    pageSize: 100,
  });

  const options = useMemo(() => {
    if (!dataQuery.data?.data?.docs) return [];

    return dataQuery.data?.data?.docs.map((branch) => ({
      value: branch.id,
      label: `${branch.name} - (${branch.branchCode})`,
    }));
  }, [dataQuery.data?.data?.docs]);

  return {
    branchOptions: options,
    loadingBranchOptions: dataQuery.isLoading,
  };
};

export default useSelectBranchOptions;
