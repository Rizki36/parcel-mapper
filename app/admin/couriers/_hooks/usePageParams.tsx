import { useSearchParams } from "next/navigation";

const usePageParams = () => {
  const searchParams = useSearchParams();

  return {
    status: searchParams.getAll("status") || [],
    search: searchParams.get("search") || "",
  };
};

export default usePageParams;
