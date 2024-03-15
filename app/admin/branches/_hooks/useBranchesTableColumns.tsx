import { Branch } from "@prismaorm/generated/client";
import { createColumnHelper } from "@tanstack/react-table";
import { HiEye, HiTrash } from "react-icons/hi2";
import Link from "next/link";
import { Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { useDeleteBranchStore } from "../_providers/DeleteBranchProvider";

const columnHelper = createColumnHelper<Branch>();

const useBranchesTableColumns = () => {
  const { setState } = useDeleteBranchStore((state) => state);

  const columns = [
    columnHelper.accessor("branchCode", {
      header: "Kode Cabang",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Nama Cabang",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (props) => {
        const id = props.row.original.id;
        return (
          <Flex columnGap={2}>
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
            <Tooltip label="Hapus cabang">
              <IconButton
                isRound={true}
                variant="outline"
                size="xs"
                aria-label="Hapus cabang"
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

export default useBranchesTableColumns;
