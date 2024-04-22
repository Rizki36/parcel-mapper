"use client";
import React from "react";
import useParcelsTable from "../_hooks/useParcelsTable";
import Table from "../../../_components/Table";
import Pagination from "../../../_components/Pagination";
import useParcelsPageQuery from "../_hooks/useParcelsPageQuery";
import { useAuth } from "@/login/hooks/useAuth";

const ParcelTable = () => {
  const { data } = useAuth();
  const {
    search,
    status: statuses,
    branchId: queryBranchId,
  } = useParcelsPageQuery();

  const branchId = data?.role === "admin" ? data?.branchId : queryBranchId;

  const { table, isLoading } = useParcelsTable({
    search,
    statuses,
    branchId: branchId ? branchId : undefined,
    with: ["branch"],
  });

  console.log(data);

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
