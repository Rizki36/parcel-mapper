"use client";
import React from "react";
import Table from "../../../_components/Table";
import Pagination from "../../../_components/Pagination";
import useBranchAdminsPageSearchParams from "../_hooks/useBranchAdminsPageSearchParams";
import useBranchAdminsTable from "../_hooks/useBranchAdminsTable";

const BranchAdminsTable = () => {
  const { search } = useBranchAdminsPageSearchParams();

  const { table, isLoading } = useBranchAdminsTable({
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

export default BranchAdminsTable;
