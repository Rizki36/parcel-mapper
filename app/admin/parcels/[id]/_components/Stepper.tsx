import classNames from "classnames";
import React, { FC, useMemo } from "react";
import { HiCheckCircle } from "react-icons/hi2";
import useParcelQuery from "../../_hooks/useParcelQuery";
import { useParams } from "next/navigation";
import { ParcelStatus } from "@prismaorm/generated/client";

const Stepper = () => {
  const params = useParams<{
    id: string;
  }>();
  const { data } = useParcelQuery({
    id: params.id,
  });
  const parcel = data?.data?.doc;

  const statuses: {
    title: string;
    status: ParcelStatus;
  }[] = [
    {
      title: "Menunggu",
      status: "PENDING",
    },
    {
      title: "Dikirim",
      status: "ON_THE_WAY",
    },
    {
      title: "Terkirim",
      status: "DELIVERED",
    },
  ];

  const activeIndex = useMemo(() => {
    return statuses.findIndex((status) => status.status === parcel?.status);
  }, [parcel?.status]);

  return (
    <ol className="max-w-[800px] flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {statuses.map((status, index) => {
        const active = index <= activeIndex;
        return (
          <Item
            key={index}
            number={index + 1}
            title={status.title}
            active={active}
            isLast={index === statuses.length - 1}
          />
        );
      })}
    </ol>
  );
};

const Item: FC<{
  title: string;
  active: boolean;
  number: number;
  isLast?: boolean;
}> = ({ title, active, isLast }) => {
  return (
    <li
      className={classNames("flex items-center", {
        "text-gray-500": !active,
        "text-primary": active,
        "md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700":
          !isLast,
      })}
    >
      <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
        {active && <HiCheckCircle className="mr-2" />}
        {title}
      </span>
    </li>
  );
};

export default Stepper;
