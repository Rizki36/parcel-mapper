import {
  PaginationState,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import useCouriersQuery from "../../../_hooks/queries/useCouriersQuery";
import useCouriersPageQuery from "./useCouriersPageQuery";
import useCouriersTableColumns from "./useCouriersTableColumns";
import { useAuth } from "@/login/hooks/useAuth";

const useCouriersTable = () => {
  const { data } = useAuth();
  const { search, branchId: queryBranchId } = useCouriersPageQuery();
  const { columns } = useCouriersTableColumns();

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const branchId =
    data?.role === "super-admin" ? queryBranchId : data?.branchId;

  const dataQuery = useCouriersQuery({
    pageIndex,
    pageSize,
    search,
    with: ["branch"],
    branchId: branchId ? branchId : undefined,
  });
  const couriersData = dataQuery.data?.data;

  const pagination = {
    pageIndex,
    pageSize,
  };

  const table = useReactTable({
    data: couriersData?.docs ?? [],
    columns,
    pageCount: couriersData?.totalPages ?? 0,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  return {
    table,
    isLoading: dataQuery.isLoading,
  };
};

export default useCouriersTable;
