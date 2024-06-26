import { PARCEL_STATUS_LABEL } from "../../../_constants";
import { HiEye, HiTrash } from "react-icons/hi2";
import Link from "next/link";
import { Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { useDeleteParcelStore } from "../_providers/DeleteParcelProvider";
import { GetParcelsResponseDoc } from "@/api/parcel/route";
import { useAuth } from "@/login/hooks/useAuth";

const columnHelper = createColumnHelper<GetParcelsResponseDoc>();

const useParcelsTableColumns = () => {
  const { data: authData } = useAuth();
  const { setState } = useDeleteParcelStore((state) => state);

  const columns = [
    columnHelper.accessor("recipientName", {
      header: "Nama Penerima",
      cell: (info) => info.getValue(),
    }),
    ...(authData?.role === "super-admin"
      ? [
          columnHelper.display({
            id: "branch",
            header: "Cabang tujuan",
            cell: (props) => {
              const branch = props.row.original.branch;
              return branch ? `${branch?.name} - (${branch?.branchCode})` : "";
            },
          }),
        ]
      : []),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => PARCEL_STATUS_LABEL[info.getValue()],
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (props) => {
        const id = props.row.original.id;
        return (
          <Flex columnGap={2}>
            <Tooltip label="Detail paket">
              <Link href={`/admin/parcels/${id}`}>
                <IconButton
                  isRound={true}
                  variant="outline"
                  size="xs"
                  aria-label="Detail paket"
                  icon={<HiEye />}
                ></IconButton>
              </Link>
            </Tooltip>
            <Tooltip label="Hapus paket">
              <IconButton
                isRound={true}
                variant="outline"
                size="xs"
                aria-label="Hapus paket"
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

  return { columns };
};

export default useParcelsTableColumns;
