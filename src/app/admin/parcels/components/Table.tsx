"use client";
import React from "react";
import useBranchesTable from "../../branches/hooks/useTable";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import useBranchesTableStore from "../../branches/hooks/useBranchesTableStore";

const ParcelTable = () => {
  const search = useBranchesTableStore((state) => state.search);
  const statuses = useBranchesTableStore((state) => state.statuses);

  const { table, isLoading } = useBranchesTable({
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
