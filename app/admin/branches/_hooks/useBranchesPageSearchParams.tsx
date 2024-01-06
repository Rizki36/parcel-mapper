import { useSearchParams } from "next/navigation";

const useBranchesPageSearchParams = () => {
  const searchParams = useSearchParams();

  return {
    search: searchParams.get("search") || "",
  };
};

export default useBranchesPageSearchParams;
