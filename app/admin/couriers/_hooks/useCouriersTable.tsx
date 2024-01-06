import {
  PaginationState,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import useCouriersQuery from "../../../_hooks/queries/useCouriersQuery";
import useCouriersPageSearchParams from "./useCouriersPageSearchParams";
import useCouriersTableColumns from "./useCouriersTableColumns";

const useCouriersTable = () => {
  const { search, branchId } = useCouriersPageSearchParams();
  const { columns } = useCouriersTableColumns();

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const dataQuery = useCouriersQuery({
    pageIndex,
    pageSize,
    search,
    with: ["branch"],
    branchId,
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
