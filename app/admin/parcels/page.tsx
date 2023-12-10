"use client";
import React from "react";
import { HiOutlineCube, HiMagnifyingGlass } from "react-icons/hi2";
import dynamic from "next/dynamic";
import { TextField } from "@radix-ui/themes";
import { useDebounceFn } from "ahooks";
import useCustomRouter from "../../_hooks/useCustomRouter";
import usePageParams from "./_hooks/usePageParams";

const ParcelTable = dynamic(() => import("./_components/Table"), {});
const ParcelFilter = dynamic(() => import("./_components/Filter"), {});

const ParcelsPage = () => {
  const { search } = usePageParams();
  const { pushReplaceFilter, pushRemoveFilter } = useCustomRouter();

  const { run } = useDebounceFn(
    (value) => {
      if (!value) return pushRemoveFilter("/admin/parcels", "search");
      pushReplaceFilter("/admin/parcels", "search", value);
    },
    {
      wait: 500,
    }
  );

  return (
    <div className="flex gap-x-4">
      <div className="bg-white rounded-xl px-4 py-6 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-semibold text-2xl flex items-center gap-x-2">
            <HiOutlineCube />
            Paket
          </h1>
          <div className="flex items-center gap-x-4">
            <TextField.Root>
              <TextField.Slot>
                <HiMagnifyingGlass />
              </TextField.Slot>
              <TextField.Input
                defaultValue={search}
                onChange={(e) => run(e.currentTarget.value)}
                placeholder="Search the docs…"
              />
            </TextField.Root>
          </div>
        </div>
        <div>
          <ParcelTable />
        </div>
      </div>
      <ParcelFilter />
    </div>
  );
};

export default ParcelsPage;
