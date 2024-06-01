import { HiEye, HiTrash } from "react-icons/hi2";
import Link from "next/link";
import { Branch, Courier } from "@prismaorm/generated/client";
import { Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { useDeleteCourierStore } from "../_providers/DeleteCourierProvider";
import { useAuth } from "@/login/hooks/useAuth";

const columnHelper = createColumnHelper<
  Courier & {
    branch?: Branch;
  }
>();

const useCouriersTableColumns = () => {
  const { data: authData } = useAuth();
  const { setState } = useDeleteCourierStore((state) => state);

  const columns = [
    columnHelper.accessor("name", {
      header: "Nama Kurir",
      cell: (info) => info.getValue(),
    }),
    ...(authData?.role === "super-admin"
      ? [
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
        ]
      : []),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (props) => {
        const id = props.row.original.id;
        return (
          <Flex columnGap={2}>
            <Tooltip label="Detail kurir">
              <Link href={`/admin/couriers/${id}`}>
                <IconButton
                  isRound={true}
                  variant="outline"
                  size="xs"
                  aria-label="Detail kurir"
                  icon={<HiEye />}
                ></IconButton>
              </Link>
            </Tooltip>
            <Tooltip label="Hapus kurir">
              <IconButton
                isRound={true}
                variant="outline"
                size="xs"
                aria-label="Hapus kurir"
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

export default useCouriersTableColumns;
