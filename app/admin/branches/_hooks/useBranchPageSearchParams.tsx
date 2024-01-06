import { useSearchParams } from "next/navigation";

const useBranchPageSearchParams = () => {
  const searchParams = useSearchParams();

  return {
    id: searchParams.get("id") || "",
  };
};

export default useBranchPageSearchParams;
