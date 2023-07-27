import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import CustomButton from "components/common/CustomButton";
export const ScheduleTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table arial-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PO</TableCell>
            <TableCell>12NC</TableCell>
            <TableCell>Start</TableCell>
            <TableCell> End</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Progress</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.po} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row.po}</TableCell>
              <TableCell>{row.nc}</TableCell>
              <TableCell>{row.start}</TableCell>
              <TableCell>{row.end}</TableCell>
              <TableCell>{row.qty}</TableCell>
              <TableCell>{row.progress}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.action}</TableCell>
              <CustomButton title="Confirm" backgroundColor="#475be8" color="#fcfcfc" />
              <CustomButton title="Reject" backgroundColor="#DC3545" color="#fcfcfc" />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const tableData = [
  {
    po: "1234567",
    nc: "8842 450 23254",
    start: "04:00",
    end: "09:00",
    qty: "1000",
    progress: "100",
    status: "Take-Off",
    action: "Delay",
  },
  {
    po: "1234567",
    nc: "8842 450 23254",
    start: "04:00",
    end: "09:00",
    qty: "1000",
    progress: "100",
    status: "Boarding",
    action: "Run",
  },
  {
    po: "1234567",
    nc: "8842 450 23254",
    start: "04:00",
    end: "09:00",
    qty: "1000",
    progress: "100",
    status: "",
    action: "Run",
  },
  {
    po: "1234567",
    nc: "8842 450 23254",
    start: "04:00",
    end: "09:00",
    qty: "1000",
    progress: "100",
    status: "",
    action: "Run",
  },
  {
    po: "1234567",
    nc: "8842 450 23254",
    start: "04:00",
    end: "09:00",
    qty: "1000",
    progress: "100",
    status: "",
    action: "Run",
  },
];
