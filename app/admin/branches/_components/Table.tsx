"use client";
import React from "react";
import Table from "../../../_components/Table";
import Pagination from "../../../_components/Pagination";
import useBranchesTable from "../_hooks/useBranchesTable";
import useBranchesPageSearchParams from "../_hooks/useBranchesPageQuery";

const BranchTable = () => {
  const { search } = useBranchesPageSearchParams();

  const { table, isLoading } = useBranchesTable({
    search,
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

export default BranchTable;
