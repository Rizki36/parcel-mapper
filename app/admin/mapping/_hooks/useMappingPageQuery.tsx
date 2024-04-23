import { useSearchParams } from "next/navigation";

const useMappingPageQuery = () => {
  const searchParams = useSearchParams();

  return {
    branchId: searchParams.get("branchId") || "",
  };
};

export default useMappingPageQuery;
