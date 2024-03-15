import { useSearchParams } from "next/navigation";

const useBranchAdminsPageSearchParams = () => {
  const searchParams = useSearchParams();

  return {
    search: searchParams.get("search") || "",
  };
};

export default useBranchAdminsPageSearchParams;
