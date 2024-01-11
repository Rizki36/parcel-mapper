import { useSearchParams } from "next/navigation";

const useParcelsPageSearchParams = () => {
  const searchParams = useSearchParams();

  return {
    status: searchParams.getAll("status") || [],
    search: searchParams.get("search") || "",
  };
};

export default useParcelsPageSearchParams;
