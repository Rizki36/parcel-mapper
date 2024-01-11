import { HiEye } from "react-icons/hi2";
import Link from "next/link";
import { Branch, Courier } from "@prismaorm/generated/client";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<
  Courier & {
    branch?: Branch;
  }
>();

const useCouriersTableColumns = () => {
  const columns = [
    columnHelper.accessor("name", {
      header: "Nama Kurir",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "branch",
      header: "Cabang",
      cell: (props) => {
        const data = props.row.original;
        return (
          <>
            {data.branch ? (
              <>
                {data.branch?.name} - (
                <Link
                  href={`/admin/branches/${data.branch.id}`}
                  target="_blank"
                >
                  {data.branch?.branchCode}
                </Link>
                )
              </>
            ) : (
              "-"
            )}
          </>
        );
      },
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

  return {
    columns,
  };
};

export default useCouriersTableColumns;
