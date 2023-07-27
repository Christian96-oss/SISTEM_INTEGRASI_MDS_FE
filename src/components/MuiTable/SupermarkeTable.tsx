import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

export const SupermarkeTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table arial-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell>Line</TableCell>
            <TableCell>Order Status</TableCell>
            <TableCell>Time Order</TableCell>
            <TableCell>Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.address} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.line}</TableCell>
              <TableCell>{row.order_status}</TableCell>
              <TableCell>{row.time_ready}</TableCell>
              <TableCell>{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const tableData = [
  {
    address: "MC001",
    line: "Main Assy # 1",
    order_status: "On Delivery",
    time_ready: "30-Aug 14:10",
    duration: "20 Min",
  },
  {
    address: "MC002",
    line: "Main Assy # 2",
    order_status: "Ready",
    time_ready: "30-Aug 13:00",
    duration: "60 Min",
  },
  {
    address: "MC003",
    line: "Main Assy # 3",
    order_status: "On Preparing",
    time_ready: "30-Aug 13:00",
    duration: "60 Min",
  },
  {
    address: "MC004",
    line: "Main Assy # 4",
    order_status: "Urgent",
    time_ready: "30-Aug 13:00",
    duration: "60 Min",
  },
];
