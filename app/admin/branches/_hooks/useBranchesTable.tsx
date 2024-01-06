import {
  PaginationState,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import useBranchesQuery from "../../../_hooks/queries/useBranchesQuery";
import useBranchesTableColumns from "./useBranchesTableColumns";

const useBranchesTable = (props: { search: string }) => {
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const { columns } = useBranchesTableColumns();

  const dataQuery = useBranchesQuery({
    pageIndex,
    pageSize,
    search: props.search || undefined,
  });
  const branchesData = dataQuery.data?.data;

  const pagination = { pageIndex, pageSize };

  const table = useReactTable({
    data: branchesData?.docs ?? [],
    columns,
    pageCount: branchesData?.totalPages ?? 0,
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

export default useBranchesTable;
