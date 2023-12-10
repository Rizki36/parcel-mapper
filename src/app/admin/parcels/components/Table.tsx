"use client";
import React from "react";
import useParcelsTable from "../hooks/useParcelsTable";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import usePageParams from "../hooks/usePageParams";

const ParcelTable = () => {
  const { search, status: statuses } = usePageParams();

  const { table, isLoading } = useParcelsTable({
    search,
    statuses,
  });

  return (
    <div>
      <Table table={table} isLoading={isLoading} />
      <Pagination
        currentPage={table.getState().pagination.pageIndex + 1}
        totalPages={table.getPageCount()}
        onPrevPage={() => {
          table.previousPage();
        }}
        onNextPage={() => {
          table.nextPage();
        }}
      />
    </div>
  );
};

export default ParcelTable;
