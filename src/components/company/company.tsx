import * as React from 'react';
import { Enterprise } from '../../services/api';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
interface ICompanyProps {
  company: Enterprise;
}
const Company = (props: ICompanyProps) => {
  const { company } = props;
  return (
    <>
      <Box>
        <h3>{company.enterpriseName}</h3>
        <h5>
          {company.address?.street} {company.address?.number} {company.address?.postalCode} {company.address?.city}
        </h5>
        <h5>BE{company.enterpriseNumber}</h5>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell>Profit</TableCell>
              <TableCell>Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell> {company.financialData?.year}</TableCell>
              <TableCell> {company.financialData?.profit}</TableCell>
              <TableCell> {company.financialData?.revenue}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Company;
