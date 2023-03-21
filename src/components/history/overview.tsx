import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ICompany } from "../../models/company/company.model";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const historyOverview = () => {
  const dummyData: ICompany[] = [
    {
      name: "Company 1",
    },
    {
      name: "Company 2",
    },
  ];
  return  <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Opgevraagde entiteiten</TableCell>
            <TableCell align="right">Ondernemingsnummer</TableCell>
            <TableCell align="right">Winst</TableCell>
            <TableCell align="right">Verlies</TableCell>
            <TableCell align="right">assets </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((name) => (
            <TableRow
              key={name.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name.name}
              </TableCell>
              <TableCell align="right">{<p> hier komt het ondernemingsnummer vanuit dumbdata dumbdata.ondernemingsnummer</p> }</TableCell> 
              <TableCell align="right">{<p> hier komt het winst vanuit dumbdata dumbdata.winst</p>}</TableCell>
              <TableCell align="right">{<p> hier komt het verlies vanuit dumbdata dumbdata.verlies</p>}</TableCell>
              <TableCell align="right">{<p> hier komt het assets vanuit dumbdata dumbdata.assets</p>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </>;
   <p></p>
};

export default historyOverview;
