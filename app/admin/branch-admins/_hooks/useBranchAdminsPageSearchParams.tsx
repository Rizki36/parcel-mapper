import { useSearchParams } from "next/navigation";

const useBranchAdminsPageSearchParams = () => {
  const searchParams = useSearchParams();

  return {
    search: searchParams.get("search") || "",
    branchId: searchParams.get("branchId") || "",
  };
};

export default useBranchAdminsPageSearchParams;
