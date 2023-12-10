"use client";
import dayjs from "dayjs";
import React, { FC } from "react";
import { HiCalendarDays } from "react-icons/hi2";

const Card: FC<{ title: string; value: string }> = ({ title, value }) => {
  return (
    <div className="rounded-lg bg-cyan-100 flex-1 p-4">
      <div className="font-semibold">{title}</div>
      <div className="text-right mt-3">
        <div className="text-5xl font-semibold">{value}</div>
      </div>
    </div>
  );
};

const AdminHomePage = () => {
  const currentDay = dayjs().format("dddd, D MMMM YYYY");

  return (
    <div className="px-4 pt-4">
      <div className="flex items-center gap-x-2 mb-6 text-xl font-semibold mt-12">
        <HiCalendarDays />
        {currentDay}
      </div>
      <div className="flex gap-x-3 w-full">
        <Card title="Parcels" value="245" />
        <Card title="Branches" value="245" />
        <Card title="Parcels" value="245" />
      </div>
    </div>
  );
};

export default AdminHomePage;
