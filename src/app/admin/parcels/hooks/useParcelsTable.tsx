import {
  PaginationState,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import useParcelsQuery from "./useParcelsQuery";
import { PARCEL_STATUS } from "@/constants";
import { IconButton, Tooltip } from "@radix-ui/themes";
import { HiEye } from "react-icons/hi2";
import Link from "next/link";
import { Parcel } from "@prismaorm/generated/client";

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

const useParcelsTable = (props: { search: string; statuses: string[] }) => {
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

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data: dataQuery.data?.data?.docs ?? [],
    columns,
    pageCount: dataQuery.data?.data?.totalPages ?? 0,
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
