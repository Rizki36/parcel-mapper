"use client";
import React from "react";
import useParcelsTable from "../_hooks/useParcelsTable";
import Table from "../../../_components/Table";
import Pagination from "../../../_components/Pagination";
import useParcelsPageQuery from "../_hooks/useParcelsPageQuery";

const ParcelTable = () => {
  const { search, status: statuses } = useParcelsPageQuery();

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
