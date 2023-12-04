import classNames from "classnames";
import React, { FC } from "react";
import { HiCheckCircle } from "react-icons/hi2";

const Stepper = () => {
  return (
    <ol className="max-w-[800px] flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <Item number={1} title="Menunggu" active />
      <Item number={2} title="Dikirim" active={false} />
      <Item number={3} title="Terkirim" active={false} isLast />
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
