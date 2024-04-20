import { BranchAdminKeyGenerator } from "@/_utils/keyGenerator";
import axiosInstance from "../../_libs/axios";
import { BuildPaginatedResponse } from "../../_utils/responseBuilder";
import { Branch, BranchAdmin, User } from "@prismaorm/generated/client";
import { useQuery } from "@tanstack/react-query";

type UseBranchAdminsQueryProps = {
  pageSize: number;
  pageIndex: number;
  search?: string;
  with?: ("branch" | "user")[];
  branchId?: string;
  id?: string;
};

type GetBranchAdminsResponse = BuildPaginatedResponse<
  BranchAdmin & {
    branch?: Branch;
    user?: User;
  }
>;

const useBranchAdminsQuery = (props: UseBranchAdminsQueryProps) => {
  const fetchDataOptions = {
    pageIndex: props.pageIndex,
    pageSize: props.pageSize,
    search: props.search,
    with: props.with,
    branchId: props.branchId,
    id: props.id,
  };

  const dataQuery = useQuery({
    queryKey: [...BranchAdminKeyGenerator.list(), fetchDataOptions],
    queryFn: async () => {
      const res = await axiosInstance.get<GetBranchAdminsResponse>(
        "/api/branch-admin",
        {
          params: fetchDataOptions,
        }
      );

      return res.data;
    },
  });

  return dataQuery;
};

export default useBranchAdminsQuery;
