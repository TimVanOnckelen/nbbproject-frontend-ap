// React
import React from "react";
import { useOutletContext } from "react-router-dom";

// Visuele onderdelen
import {
  Button,
  TextField,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

// Interne onderdelen
// import { ICompareResult } from "../../models/company/company.model";
import { FinancialData } from "../../services/api";
import { IAppContext } from "../../models";

// Vergelijkt twee bedrijven. Voorlopig worden de twee bedrijven nog fixed meegegeven.
// Gaat verbinding maken met de backend API om gegevens in te lezen.
const Compare = () => {
  // const [compareResult, setCompareResult] = React.useState<ICompareResult[]>(
  //   []
  // );
  const { api } = useOutletContext<IAppContext>()  ?? { api: undefined };

  const [company1FinancialData, setCompany1FinancialData] =
    React.useState<FinancialData>();
  const [company2FinancialData, setCompany2FinancialData] =
    React.useState<FinancialData>();
  const [company1, setCompany1] = 
    React.useState<string>();
  const [company2, setCompany2] = 
    React.useState<string>();

  const getCompany = React.useCallback(() => {
    const loadCompanyData = async () => {
      try {
        if (!company1 || !company2) return;

        const response =
          await api.enterprise.apiEnterpriseOndernemingsnummerFinancialYearGet(
            "0712657911",
            2021
          );
        setCompany1FinancialData(response.data);
        const response2 =
          await api.enterprise.apiEnterpriseOndernemingsnummerFinancialYearGet(
            "0764896369",
            2021
          );
        setCompany2FinancialData(response2.data);
      } catch (e) {
        console.log(e);
      }
    };

    loadCompanyData().then(() => {});
  }, [company1, company2, api]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={5}>
          <TextField
            id="company1"
            label="Bedrijf 1"
            variant="outlined"
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
            id="company2"
            label="Bedrijf 2"
            variant="outlined"
            value={company2}
            onChange={(e) => {
              setCompany2(e.target.value);
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={6}>
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
                  <TableCell>{company1FinancialData?.profit}</TableCell>
                  <TableCell>{company1FinancialData?.revenue}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6}>
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
                  <TableCell>{company2FinancialData?.profit}</TableCell>
                  <TableCell>{company2FinancialData?.revenue}</TableCell>
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
