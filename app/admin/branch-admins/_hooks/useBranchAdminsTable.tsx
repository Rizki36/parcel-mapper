import {
  PaginationState,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import useBranchAdminsTableColumns from "./useBranchAdminsTableColumns";
import useBranchAdminsQuery from "@/_hooks/queries/useBranchAdminsQuery";

const useBranchAdminsTable = (props: {
  search: string;
  branchId: string | undefined;
}) => {
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const { columns } = useBranchAdminsTableColumns();

  const dataQuery = useBranchAdminsQuery({
    pageIndex,
    pageSize,
    search: props.search || undefined,
    with: ["branch"],
    branchId: props.branchId,
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

export default useBranchAdminsTable;
