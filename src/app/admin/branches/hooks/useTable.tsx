import {
  PaginationState,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import useBranchesQuery from "./useBranchesQuery";
import { Parcel } from "@/types";
import { PARCEL_STATUS } from "@/constants";
import { IconButton, Tooltip } from "@radix-ui/themes";
import { HiEye } from "react-icons/hi2";
import Link from "next/link";

const columnHelper = createColumnHelper<Parcel>();

const columns = [
  columnHelper.accessor("recipientName", {
    header: "Nama Penerima",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => PARCEL_STATUS[info.getValue()],
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: (props) => {
      const id = props.row.original.id;
      return (
        <div>
          <Tooltip content="Detail paket">
            <Link href={`/admin/parcels/${id}`}>
              <IconButton radius="full" variant="soft">
                <HiEye />
              </IconButton>
            </Link>
          </Tooltip>
        </div>
      );
    },
    size: 20,
  }),
];

const useBranchesTable = (props: { search: string; statuses: string[] }) => {
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const dataQuery = useBranchesQuery({
    pageIndex,
    pageSize,
    search: props.search,
    statuses: props.statuses,
  });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data: dataQuery.data?.rows ?? [],
    columns,
    pageCount: dataQuery.data?.pageCount ?? -1,
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
