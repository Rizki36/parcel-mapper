import useParcelsQuery from "@/_hooks/queries/useParcelsQuery";
import useMappingPageQuery from "./useMappingPageQuery";
import { useAuth } from "@/login/hooks/useAuth";

const useParcelsData = () => {
  const { data } = useAuth();
  const { branchId: queryBranchId } = useMappingPageQuery();

  const branchId =
    data?.role === "super-admin" ? queryBranchId : data?.branchId;

  const {
    data: parcelsData,
    error: parcelsError,
    isLoading: loadingParcels,
  } = useParcelsQuery({
    pageSize: 100,
    pageIndex: 0,
    with: ["branch"],
    statuses: ["PENDING"],
    branchId: branchId ?? "",
    options: {
      enabled: !!branchId,
      refetchOnWindowFocus: false,
    },
  });

  const parcels = parcelsData?.data?.docs ?? [];

  return {
    parcels,
    parcelsError,
    loadingParcels,
  };
};

export default useParcelsData;
