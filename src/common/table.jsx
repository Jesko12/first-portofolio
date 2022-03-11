import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { TableWrapper } from "./CommonElements";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <TableWrapper>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </TableWrapper>
  );
};

export default Table;
