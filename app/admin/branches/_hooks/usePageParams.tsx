import { useSearchParams } from "next/navigation";

const usePageParams = () => {
  const searchParams = useSearchParams();

  return {
    search: searchParams.get("search") || "",
  };
};

export default usePageParams;
