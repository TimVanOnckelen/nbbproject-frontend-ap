// React
import React from 'react';
import { useOutletContext } from 'react-router-dom';

// Visuele onderdelen
import { Button, TextField, Grid, TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Alert } from '@mui/material';

// Interne onderdelen
// import { ICompareResult } from "../../models/company/company.model";
import { Enterprise, FinancialData } from '../../services/api';
import { IAlert, IAppContext } from '../../models';

// Vergelijkt twee bedrijven. Voorlopig worden de twee bedrijven nog fixed meegegeven.
// Gaat verbinding maken met de backend API om gegevens in te lezen.
const Compare = () => {
  // const [compareResult, setCompareResult] = React.useState<ICompareResult[]>(
  //   []
  // );
  const { api } = useOutletContext<IAppContext>() ?? { api: undefined };

  const [company1FinancialData, setCompany1FinancialData] = React.useState<Enterprise>();
  const [company2FinancialData, setCompany2FinancialData] = React.useState<Enterprise>();
  const [company1, setCompany1] = React.useState<string>();
  const [company2, setCompany2] = React.useState<string>();

  const [hasError, setHasError] = React.useState<IAlert>({ hasError: false });

  const getCompany = React.useCallback(() => {
    const loadCompanyData = async () => {
      try {
        setHasError({ hasError: false });
        if (!company1 || !company2) {
          setHasError({ hasError: true, message: 'Please enter valid VAT numbers.', type: 'error' });
          return;
        }

        const response = await api.enterprise.apiEnterpriseOndernemingsnummerGet('0712657911');
        setCompany1FinancialData(response.data);
        const response2 = await api.enterprise.apiEnterpriseOndernemingsnummerGet('0764896369');
        setCompany2FinancialData(response2.data);
      } catch (e) {
        setHasError({ hasError: true, message: 'Something ' });
      }
    };

    loadCompanyData().then(() => {});
  }, [company1, company2, api]);

  return (
    <>
      {hasError.hasError && <Alert severity={hasError.type}>{hasError.message}</Alert>}
      <Grid container>
        <Grid xs={5}>
          <TextField
            id='company1'
            label='Bedrijf 1'
            variant='outlined'
            value={company1}
            onChange={(e) => {
              setCompany1(e.target.value);
            }}
          />
        </Grid>
        <Grid xs={2}>
          <Button onClick={getCompany}>Vergelijk</Button>
        </Grid>
        <Grid xs={5}>
          <TextField
            id='company2'
            label='Bedrijf 2'
            variant='outlined'
            value={company2}
            onChange={(e) => {
              setCompany2(e.target.value);
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Grid
          item
          xs={6}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Profit</TableCell>
                  <TableCell>Revenue</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{company1FinancialData?.enterpriseName}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid
          item
          xs={6}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Profit</TableCell>
                  <TableCell>Revenue</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{company2FinancialData?.enterpriseName}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Compare;
