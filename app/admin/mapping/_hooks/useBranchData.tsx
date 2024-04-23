import { useAuth } from "@/login/hooks/useAuth";
import useMappingPageQuery from "./useMappingPageQuery";
import useBranchQuery from "@/_hooks/queries/useBranchQuery";

const useBranchData = () => {
  const { data: authData } = useAuth();
  const { branchId: queryBranchId } = useMappingPageQuery();

  const branchId =
    authData?.role === "super-admin" ? queryBranchId : authData?.branchId;

  const { data } = useBranchQuery({
    id: branchId ?? "",
    enabled: !!branchId,
  });

  return {
    branch: data?.data?.doc,
    branchError: data?.error,
  };
};

export default useBranchData;
