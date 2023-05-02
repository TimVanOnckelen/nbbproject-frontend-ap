// React
import React from 'react';
import { useOutletContext } from 'react-router-dom';

// Visuele onderdelen
import { Button, TextField, Grid, TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Alert, Box, Skeleton } from '@mui/material';

// Interne onderdelen
// import { ICompareResult } from "../../models/company/company.model";
import { Enterprise } from '../../services/api';
import { IAlert, IAppContext } from '../../models';

// Vergelijkt twee bedrijven. Voorlopig worden de twee bedrijven nog fixed meegegeven.
// Gaat verbinding maken met de backend API om gegevens in te lezen.
const Compare = () => {
  const { api, callConfig } = useOutletContext<IAppContext>() ?? { api: undefined };

  const [company1FinancialData, setCompany1FinancialData] = React.useState<Enterprise>();
  const [company2FinancialData, setCompany2FinancialData] = React.useState<Enterprise>();
  const [company1, setCompany1] = React.useState<string>();
  const [company2, setCompany2] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [hasError, setHasError] = React.useState<IAlert>({ hasError: false });

  const updateCompany = React.useCallback(
    (companyNumber: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (companyNumber === 1) {
        setCompany1(e.target.value);
      }
      if (companyNumber === 2) {
        setCompany2(e.target.value);
      }
    },
    [setCompany1, setCompany2]
  );

  const getCompany = React.useCallback(() => {
    const loadCompanyData = async () => {
      try {
        setHasError({ hasError: false });
        setIsLoading(true);
        if (!company1 || !company2) {
          setHasError({ hasError: true, message: 'Please enter valid VAT numbers.', type: 'error' });
          return;
        }
        const response = await api.enterprise.apiEnterpriseOndernemingsnummerGet(company1, callConfig);
        setCompany1FinancialData(response.data);
        const response2 = await api.enterprise.apiEnterpriseOndernemingsnummerGet(company2, callConfig);
        setCompany2FinancialData(response2.data);
      } catch (e) {
        console.log(e);
        setHasError({ hasError: true, message: 'Seems like one of the companys does not exsist in the database. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    };

    loadCompanyData().then(() => {});
  }, [company1, company2, api, callConfig]);

  return (
    <>
      {hasError.hasError && <Alert severity='error'>{hasError.message}</Alert>}
      <Box>
        <p>Input 2 VAT numbers to compare there financial data.</p>
      </Box>
      <Grid container>
        <Grid xs={5}>
          <TextField
            id='company1'
            label='Company 1'
            variant='outlined'
            value={company1}
            onChange={updateCompany(1)}
          />
        </Grid>
        <Grid xs={2}>
          <Button onClick={getCompany}>Compare</Button>
        </Grid>
        <Grid xs={5}>
          <TextField
            id='company2'
            label='Company 2'
            variant='outlined'
            value={company2}
            onChange={updateCompany(2)}
          />
        </Grid>
      </Grid>
      {isLoading && (
        <>
          <Skeleton
            variant='rectangular'
            width={210}
            height={10}
          />
          <Skeleton
            variant='rectangular'
            width={230}
            height={10}
          />
          <Skeleton
            variant='rectangular'
            width={250}
            height={10}
          />
          <Skeleton
            variant='rectangular'
            width={260}
            height={10}
          />
        </>
      )}
      {company1FinancialData && company2FinancialData && (
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
      )}
    </>
  );
};

export default Compare;
