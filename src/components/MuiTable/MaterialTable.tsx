import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

export const MaterialTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table arial-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Part</TableCell>
            <TableCell>12NC</TableCell>
            <TableCell>Qty/Bin</TableCell>
            <TableCell>Max Bin</TableCell>
            <TableCell>#Bin</TableCell>
            <TableCell>Qty Deliver</TableCell>
            <TableCell>Qty Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.part} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row.part}</TableCell>
              <TableCell>{row.nc}</TableCell>
              <TableCell>{row.qty_bin}</TableCell>
              <TableCell>{row.max_bin}</TableCell>
              <TableCell>{row.bin}</TableCell>
              <TableCell>{row.qty_deliver}</TableCell>
              <TableCell>{row.qty_order}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const tableData = [
  {
    part: "Dormal Cup",
    nc: "421335083380",
    qty_bin: "180",
    max_bin: "6",
    bin: "100",
    qty_deliver: "1000",
    qty_order: "-",
  },
  {
    part: "Secrew Ring",
    nc: "421335083381",
    qty_bin: "180",
    max_bin: "6",
    bin: "100",
    qty_deliver: "1000",
    qty_order: "-",
  },
  {
    part: "Treat",
    nc: "421335083382",
    qty_bin: "500",
    max_bin: "1",
    bin: "100",
    qty_deliver: "1000",
    qty_order: "-",
  },
  {
    part: "Fancy",
    nc: "421335083383",
    qty_bin: "700",
    max_bin: "2",
    bin: "100",
    qty_deliver: "1000",
    qty_order: "-",
  },
  {
    part: "DFU",
    nc: "421335083384",
    qty_bin: "500",
    max_bin: "2",
    bin: "100",
    qty_deliver: "1000",
    qty_order: "-",
  },
  {
    part: "A-box",
    nc: "421335083385",
    qty_bin: "100",
    max_bin: "1",
    bin: "100",
    qty_deliver: "1000",
    qty_order: "-",
  },
];
