// React
import React from 'react';
import { useOutletContext } from 'react-router-dom';

// Visuele onderdelen
import { Button, TextField, Grid, Alert, Box, CircularProgress } from '@mui/material';

import Company from './company';

// Interne onderdelen
// import { ICompareResult } from "../../models/company/company.model";
import { Enterprise } from '../../services/api';
import { IAlert, IAppContext, IHighestData } from '../../models';

// Vergelijkt twee bedrijven. Voorlopig worden de twee bedrijven nog fixed meegegeven.
// Gaat verbinding maken met de backend API om gegevens in te lezen.
const Compare = () => {
  const { api, callConfig } = useOutletContext<IAppContext>() ?? { api: undefined };

  const [companysFinancialData, setCompanysFinancialData] = React.useState<Enterprise[]>([]);
  const [company1, setCompany1] = React.useState<string>();
  const [company2, setCompany2] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [highestData, setHighestData] = React.useState<IHighestData>({});

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
        setCompanysFinancialData([]);
        setIsLoading(true);
        if (!company1 || !company2) {
          setHasError({ hasError: true, message: 'Please enter valid VAT numbers.', type: 'error' });
          return;
        }
        const response = await api.enterprise.apiEnterprisePost({ enterpriseNumbers: [company1, company2] }, callConfig);
        if (response.status === 200 && response.data.length > 1) {
          setCompanysFinancialData(response.data as Enterprise[]);
        }
      } catch (e) {
        console.log(e);
        setHasError({ hasError: true, message: 'Seems like one or both of the companys does not exsist in the database. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    };

    loadCompanyData().then(() => {});
  }, [company1, company2, api, callConfig]);

  React.useEffect(() => {
    if (companysFinancialData.length === 0) return;
    const maxProfitEnterprise = companysFinancialData.reduce((prev, current) => {
      if (prev.financialData?.profit && current.financialData?.profit) {
        return prev.financialData?.profit > current.financialData?.profit ? prev : current;
      }
      return current;
    });
    const maxRevenueEnterprise = companysFinancialData.reduce((prev, current) => {
      if (prev.financialData?.revenue && current.financialData?.revenue) {
        return prev.financialData?.revenue > current.financialData?.revenue ? prev : current;
      }
      return current;
    });

    setHighestData({
      profit: maxProfitEnterprise.financialData?.profit,
      revenue: maxRevenueEnterprise.financialData?.revenue,
    });
  }, [companysFinancialData]);

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
      <Grid
        container
        spacing={2}
        sx={{ mt: 2 }}
      >
        {isLoading && <CircularProgress />}
        {companysFinancialData &&
          companysFinancialData.map((currentCompany) => (
            <Grid
              item
              xs={6}
            >
              <Company
                company={currentCompany}
                highestData={highestData}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Compare;
