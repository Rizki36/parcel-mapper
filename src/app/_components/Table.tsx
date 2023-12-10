import { Table as TableType, flexRender } from "@tanstack/react-table";
import classNames from "classnames";
import React from "react";

const Table = <T,>(props: {
  table: TableType<T>;
  isLoading?: boolean;
  containerClassName?: string;
  tableClassName?: string;
}) => {
  const { table, isLoading, containerClassName, tableClassName } = props;

  return (
    <div className={classNames("relative", containerClassName)}>
      <table
        className={classNames("min-w-full text-left text-sm", tableClassName)}
      >
        <thead className="border-b font-medium">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  {...{
                    colSpan: header.colSpan,
                    style: {
                      width: header.getSize(),
                    },
                  }}
                  className="py-3 px-2 text-neutral-500"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="py-2.5 px-2"
                  width={cell.column.getSize()}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading ? (
        <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : null}
    </div>
  );
};

export default Table;
