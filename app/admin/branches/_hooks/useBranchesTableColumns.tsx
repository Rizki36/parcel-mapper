import { Branch } from "@prismaorm/generated/client";
import { createColumnHelper } from "@tanstack/react-table";
import { HiEye } from "react-icons/hi2";
import Link from "next/link";
import { IconButton, Tooltip } from "@chakra-ui/react";

const columnHelper = createColumnHelper<Branch>();

const useBranchesTableColumns = () => {
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

  return {
    columns,
  };
};

export default useBranchesTableColumns;
