import {
  PaginationState,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import useParcelsQuery from "../../../_hooks/queries/useParcelsQuery";
import useParcelsTableColumns from "./useParcelsTableColumns";
import { QueryWithGetParcelsData } from "@/api/parcel/route";

const useParcelsTable = (props: {
  search: string;
  statuses: string[];
  branchId?: string;
  with?: QueryWithGetParcelsData[];
}) => {
  const { columns } = useParcelsTableColumns();

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const dataQuery = useParcelsQuery({
    pageIndex,
    pageSize,
    search: props.search || undefined,
    statuses: props.statuses,
    branchId: props.branchId,
    with: props.with,
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
