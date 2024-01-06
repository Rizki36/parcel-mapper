import {
  PaginationState,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { HiEye } from "react-icons/hi2";
import Link from "next/link";
import { Branch } from "@prismaorm/generated/client";
import { IconButton, Tooltip } from "@chakra-ui/react";
import useBranchesQuery from "../../../_hooks/queries/useBranchesQuery";

const columnHelper = createColumnHelper<Branch>();

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
          <Tooltip label="Detail cabang">
            <Link href={`/admin/branches/${id}`}>
              <IconButton
                isRound={true}
                variant="outline"
                size="xs"
                aria-label="Detail cabang"
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

const useBranchesTable = (props: { search: string }) => {
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const dataQuery = useBranchesQuery({
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

export default useBranchesTable;
