import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper } from "@mui/material";
import { box } from "assets";
import { gembok } from "assets";
import { bohlam } from "assets";
import { earphone } from "assets";
import { empeng } from "assets";
import { avent } from "assets";
import { Box } from "@pankod/refine-mui";
import { CustomButton } from "components";
export const ProducTable = () => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <center>
          <CustomButton title="Supermarket" backgroundColor="#4CAF50" color="#ffff" />
        </center>
        <Table arial-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <center>
                  <img src={box} alt="box" width="80px" height="65px" />
                  <h5>A-BOX</h5>
                  <h5>160</h5>
                  <h5>/BIN</h5>
                </center>
              </TableCell>
              <TableCell>
                <center>
                  <img src={bohlam} alt="bohlam" width="60px" height="50px" />
                  <h5>A-BOX</h5>
                  <h5>160</h5>
                  <h5>/BIN</h5>
                </center>
              </TableCell>
              <TableCell>
                <center>
                  <img src={gembok} alt=" gembok" width="80px" height="65px" />
                  <h5>A-BOX</h5>
                  <h5>160</h5>
                  <h5>/BIN</h5>
                </center>
              </TableCell>
            </TableRow>
            <TableCell>
              <center>
                <img src={earphone} alt=" earphone" width="80px" height="65px" />
                <h5>A-BOX</h5>
                <h5>160</h5>
                <h5>/BIN</h5>
              </center>
            </TableCell>
            <TableCell>
              <center>
                <img src={empeng} alt=" empeng" width="80px" height="65px" />
                <h5>A-BOX</h5>
                <h5>160</h5>
                <h5>/BIN</h5>
              </center>
            </TableCell>
            <TableCell>
              <center>
                <img src={avent} alt="avent" width="80px" height="65px" />
                <h5>A-BOX</h5>
                <h5>160</h5>
                <h5>/BIN</h5>
              </center>
            </TableCell>
          </TableHead>
          <TableCell>
            <center>
              <img src={bohlam} alt="bohlam" width="60px" height="50px" />
              <h5>A-BOX</h5>
              <h5>160</h5>
              <h5>/BIN</h5>
            </center>
          </TableCell>
          <TableCell>
            <center>
              <img src={gembok} alt="gembok" width="80px" height="65px" />
              <h5>A-BOX</h5>
              <h5>160</h5>
              <h5>/BIN</h5>
            </center>
          </TableCell>
          <TableCell>
            <center>
              <img src={empeng} alt="empeng" width="80px" height="65px" />
              <h5>A-BOX</h5>
              <h5>160</h5>
              <h5>/BIN</h5>
            </center>
          </TableCell>
        </Table>
      </TableContainer>
    </Box>
  );
};
