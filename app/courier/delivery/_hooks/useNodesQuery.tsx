import axiosInstance from "@/_libs/axios";
import { BuildResponse } from "@/_utils/responseBuilder";
import { GetOneBranchData } from "@/api/branch/[id]/route";
import {
  GetParcelsResponse,
  QueryStatusesGetParcels,
} from "@/api/parcel/route";
import { useAuth } from "@/login/hooks/useAuth";
import { Node } from "../_stores/delivery-store";
import { useQuery } from "@tanstack/react-query";

const useNodesQuery = () => {
  const { data } = useAuth();

  const getNodes = async (): Promise<Node[]> => {
    const branchRequest = axiosInstance.get<
      BuildResponse<{
        doc: GetOneBranchData;
      }>
    >(`/api/branch/${data?.branchId}`);
    const parcelsRequest = axiosInstance.get<GetParcelsResponse>(
      "/api/parcel",
      {
        params: {
          branchId: data?.branchId,
          pageIndex: 0,
          pageSize: 100,
          statuses: ["ON_THE_WAY"] as QueryStatusesGetParcels[],
          courierId: data?.courierId,
          sort: "createdAt",
        },
      }
    );

    const [branchResponse, parcelsResponse] = await Promise.all([
      branchRequest,
      parcelsRequest,
    ]);

    const branch = branchResponse?.data?.data?.doc;
    const parcels = parcelsResponse?.data?.data?.docs;

    if (!branch || !parcels?.length) return [];

    const nodes: Node[] = [
      {
        id: 0,
        type: "branch",
        lat: branch.latitude,
        lng: branch.longitude,
      },
      ...parcels.map(
        (parcel, index) =>
          ({
            type: "customer",
            id: index + 1,
            lat: parcel.latitude,
            lng: parcel.longitude,
            recipientAddress: parcel.recipientAddress,
            recipientName: parcel.recipientName,
            recipientNumber: "",
          } as Node)
      ),
    ];

    return nodes;
  };

  const response = useQuery({
    queryKey: ["nodes"],
    queryFn: getNodes,
    enabled: !!data?.branchId,
  });

  return response;
};

export default useNodesQuery;
