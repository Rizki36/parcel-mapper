"use client";
import React from "react";
import Table from "@/_components/Table";
import Pagination from "@/_components/Pagination";
import useCourierParcelsTable from "../_hooks/useCourierParcelsTable";

const CourierParcelsTable = () => {
  const { table, isLoading } = useCourierParcelsTable();

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

export default CourierParcelsTable;
