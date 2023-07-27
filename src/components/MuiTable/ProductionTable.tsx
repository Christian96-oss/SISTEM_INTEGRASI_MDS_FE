import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import { box } from "assets";
import { gembok } from "assets";
import { bohlam } from "assets";
import { earphone } from "assets";
import { empeng } from "assets";
import { avent } from "assets";
import { CustomButton } from "components";
import { Box } from "@pankod/refine-mui";
export const ProductionTable = () => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <center>
          <CustomButton title="Production" backgroundColor="#8594" color="#ffff" />
        </center>
        <Table arial-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Part</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Qty/Bin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{row.part}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.qty_bin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
const tableData = [
  {
    id: "1",
    part: <img src={box} alt="box" width="80px" height="65px" />,
    name: "Box",
    qty_bin: "160",
  },
  {
    id: "1",
    part: <img src={bohlam} alt="box" width="80px" height="65px" />,
    name: "Bohlam",
    qty_bin: "160",
  },
  {
    id: "1",
    part: <img src={gembok} alt="box" width="80px" height="65px" />,
    name: "Gembok",
    qty_bin: "160",
  },
  {
    id: "1",
    part: <img src={earphone} alt="box" width="80px" height="65px" />,
    name: "Earphone",
    qty_bin: "160",
  },
  {
    id: "1",
    part: <img src={empeng} alt="box" width="80px" height="65px" />,
    name: "Empeng",
    qty_bin: "160",
  },
  {
    id: "1",
    part: <img src={avent} alt="box" width="80px" height="65px" />,
    name: "Avent",
    qty_bin: "160",
  },
];
