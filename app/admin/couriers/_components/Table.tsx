"use client";
import React from "react";
import useCouriersTable from "../_hooks/useCouriersTable";
import Table from "../../../_components/Table";
import Pagination from "../../../_components/Pagination";

const CourierTable = () => {
  const { table, isLoading } = useCouriersTable();

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

export default CourierTable;
