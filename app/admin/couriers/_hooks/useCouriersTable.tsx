import {
  PaginationState,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import useCouriersQuery from "./useCouriersQuery";
import { HiEye } from "react-icons/hi2";
import Link from "next/link";
import { Courier } from "@prismaorm/generated/client";
import { IconButton, Tooltip } from "@chakra-ui/react";

const columnHelper = createColumnHelper<Courier>();

const columns = [
  columnHelper.accessor("name", {
    header: "Nama Penerima",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: (props) => {
      const id = props.row.original.id;
      return (
        <div>
          <Tooltip label="Detail kurir">
            <Link href={`/admin/couriers/${id}`}>
              <IconButton
                isRound={true}
                variant="outline"
                size="xs"
                aria-label="Detail kurir"
                icon={<HiEye style="" />}
              ></IconButton>
            </Link>
          </Tooltip>
        </div>
      );
    },
    size: 20,
  }),
];

const useCouriersTable = (props: { search: string }) => {
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const dataQuery = useCouriersQuery({
    pageIndex,
    pageSize,
    search: props.search || undefined,
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

export default useCouriersTable;