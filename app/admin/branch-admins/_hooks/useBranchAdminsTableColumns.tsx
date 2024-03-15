import { Branch, BranchAdmin } from "@prismaorm/generated/client";
import { createColumnHelper } from "@tanstack/react-table";
import { HiEye, HiTrash } from "react-icons/hi2";
import Link from "next/link";
import { Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { useDeleteBranchAdminStore } from "../_providers/DeleteBranchAdminStore";

const columnHelper = createColumnHelper<
  BranchAdmin & {
    branch?: Branch;
  }
>();

const useBranchAdminsTableColumns = () => {
  const { setState } = useDeleteBranchAdminStore((state) => state);

  const columns = [
    columnHelper.accessor("name", {
      header: "Nama admin",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("branch.name", {
      header: "Nama Cabang",
      cell: (info) =>
        info.row.original.branch
          ? `${info.getValue()} (${info.row.original.branch?.branchCode})`
          : "",
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (props) => {
        const id = props.row.original.id;
        return (
          <Flex columnGap={2}>
            <Tooltip label="Detail admin cabang">
              <Link href={`/admin/branch-admins/${id}`}>
                <IconButton
                  isRound={true}
                  variant="outline"
                  size="xs"
                  aria-label="Detail admin cabang"
                  icon={<HiEye style="" />}
                ></IconButton>
              </Link>
            </Tooltip>
            <Tooltip label="Hapus admin cabang">
              <IconButton
                isRound={true}
                variant="outline"
                size="xs"
                aria-label="Hapus admin cabang"
                icon={<HiTrash />}
                onClick={() => setState({ id, open: true })}
              ></IconButton>
            </Tooltip>
          </Flex>
        );
      },
      size: 20,
    }),
  ];

  return {
    columns,
  };
};

export default useBranchAdminsTableColumns;
