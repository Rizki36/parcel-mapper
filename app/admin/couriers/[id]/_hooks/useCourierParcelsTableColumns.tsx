import { HiEye } from "react-icons/hi2";
import Link from "next/link";
import { Parcel } from "@prismaorm/generated/client";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { PARCEL_STATUS_LABEL } from "@/_constants";

const columnHelper = createColumnHelper<Parcel>();

const useCourierParcelsTableColumns = () => {
  const columns = [
    columnHelper.accessor("recipientName", {
      header: "Nama Penerima",
      cell: (info) => info.getValue(),
    }),
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
          <div>
            <Tooltip label="Detail paket">
              <Link href={`/admin/parcels/${id}`}>
                <IconButton
                  isRound={true}
                  variant="outline"
                  size="xs"
                  aria-label="Detail paket"
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

  return { columns };
};

export default useCourierParcelsTableColumns;
