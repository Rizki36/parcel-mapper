import {
  PaginationState,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import useCourierParcelsTableColumns from "./useCourierParcelsTableColumns";
import useParcelsQuery from "@/_hooks/queries/useParcelsQuery";
import useCourierPageQuery from "./useCourierPageQuery";

const useCourierParcelsTable = () => {
  const { id } = useCourierPageQuery();
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const { columns } = useCourierParcelsTableColumns();

  const dataQuery = useParcelsQuery({
    pageIndex,
    pageSize,
    statuses: [],
    courierId: id,
  });
  const parcelsData = dataQuery.data?.data;

  const pagination = { pageIndex, pageSize };

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

export default useCourierParcelsTable;
