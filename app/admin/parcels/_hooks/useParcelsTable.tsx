import {
  PaginationState,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import useParcelsQuery from "../../../_hooks/queries/useParcelsQuery";
import useParcelsTableColumns from "./useParcelsTableColumns";

const useParcelsTable = (props: { search: string; statuses: string[] }) => {
  const { columns } = useParcelsTableColumns();

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const dataQuery = useParcelsQuery({
    pageIndex,
    pageSize,
    search: props.search || undefined,
    statuses: props.statuses,
  });
  const parcelsData = dataQuery.data?.data;

  const pagination = {
    pageIndex,
    pageSize,
  };

  const table = useReactTable({
    data: parcelsData?.docs ?? [],
    columns,
    pageCount: parcelsData?.totalPages ?? 0,
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

export default useParcelsTable;
