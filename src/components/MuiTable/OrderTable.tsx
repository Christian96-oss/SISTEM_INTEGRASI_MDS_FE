import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

export const OrderTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table arial-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Line</TableCell>
            <TableCell>Order Time</TableCell>
            <TableCell>Order Lead Time</TableCell>
            <TableCell>12 NC</TableCell>
            <TableCell>PO</TableCell>
            <TableCell>Trolly Remain</TableCell>
            <TableCell>Order Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.line} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row.line}</TableCell>
              <TableCell>{row.order_time}</TableCell>
              <TableCell>{row.order_lead_time}</TableCell>
              <TableCell>{row.nc}</TableCell>
              <TableCell>{row.po}</TableCell>
              <TableCell>{row.troly_remain}</TableCell>
              <TableCell>{row.order_status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const tableData = [
  {
    line: "Main Assy 1",
    order_time: "30-Aug 13:00",
    order_lead_time: "90 Min",
    nc: "421335083381",
    po: "1002541",
    troly_remain: "1",
    order_status: "On Delivery",
  },
  {
    line: "Main Assy 2",
    order_time: "30-Aug 13:15",
    order_lead_time: "75 Min",
    nc: "421335083380",
    po: "1002542",
    troly_remain: "0",
    order_status: "Ready",
  },
  {
    line: "Main Assy 3",
    order_time: "30-Aug 13:15",
    order_lead_time: "60 Min",
    nc: "421335083389",
    po: "1002540",
    troly_remain: "0",
    order_status: "Preparing",
  },
  {
    line: "Spare Teat 1",
    order_time: "30-Aug 13:30",
    order_lead_time: "60 Min",
    nc: "421335081180",
    po: "1002342",
    troly_remain: "0",
    order_status: "Urgent",
  },
  {
    line: "Main Assy 1",
    order_time: "30-Aug 14:00",
    order_lead_time: "30 Min",
    nc: "421335081180",
    po: "1002332",
    troly_remain: "1",
    order_status: "No Order",
  },
];
