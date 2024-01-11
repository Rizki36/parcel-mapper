import { useSearchParams } from "next/navigation";

const useCouriersPageSearchParams = () => {
  const searchParams = useSearchParams();

  return {
    status: searchParams.getAll("status") || [],
    search: searchParams.get("search") || "",
    branchId: searchParams.get("branchId") || "",
  };
};

export default useCouriersPageSearchParams;
