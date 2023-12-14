import { Table as TableType, flexRender } from "@tanstack/react-table";
import React from "react";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  CircularProgress,
} from "@chakra-ui/react";

const Table = <T,>(props: {
  table: TableType<T>;
  isLoading?: boolean;
  containerClassName?: string;
  tableClassName?: string;
}) => {
  const { table, isLoading, containerClassName, tableClassName } = props;

  return (
    <TableContainer position="relative" className={containerClassName}>
      <ChakraTable
        variant="unstyled"
        className={tableClassName}
        fontSize="small"
      >
        <Thead
          borderBottom={1}
          borderBottomStyle="solid"
          borderBottomColor="gray.100"
          fontWeight="medium"
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th
                  key={header.id}
                  {...{
                    colSpan: header.colSpan,
                    style: {
                      width: header.getSize(),
                    },
                  }}
                  py={3}
                  px={2}
                  color="gray.600"
                  textTransform="unset"
                  fontSize=""
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td
                  key={cell.id}
                  py={2}
                  px={2}
                  width={cell.column.getSize()}
                  fontSize="small"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
          {isLoading ? (
            <Tr>
              <Td
                colSpan={1000}
                py={2}
                px={2}
                fontSize="small"
                textAlign="center"
                verticalAlign="middle"
              >
                <CircularProgress isIndeterminate color="teal.300" size={10} />
              </Td>
            </Tr>
          ) : null}

          {table.getRowModel().rows.length === 0 && !isLoading ? (
            <Tr>
              <Td
                colSpan={1000}
                py={2}
                px={2}
                fontSize="small"
                textAlign="center"
                verticalAlign="middle"
              >
                Tidak ada data
              </Td>
            </Tr>
          ) : null}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
