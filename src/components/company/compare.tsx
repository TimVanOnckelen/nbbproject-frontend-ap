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
import React from "react";
import { ICompareResult } from "../../models/company/company.model";

const Compare = () => {
  const [compareResult, setCompareResult] = React.useState<ICompareResult[]>(
    []
  );
  const [company1, setCompany1] = React.useState<string>("");
  const [company2, setCompany2] = React.useState<string>("");

  const onCompare = React.useCallback(() => {
    const dummyData: ICompareResult[] = [
      {
        total: 100,
        name: company1,
      },
      {
        total: 200,
        name: company2,
      },
    ];
    return setCompareResult(dummyData);
  }, [company1, company2, setCompareResult]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={5}>
          <TextField
            id="company1"
            label="Bedrijf 1"
            variant="outlined"
            value={company1}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCompany1(event.target.value);
            }}
          />
        </Grid>
        <Grid xs={2}>
          <Button onClick={onCompare}>Vergelijk</Button>
        </Grid>
        <Grid xs={5}>
          <TextField
            id="company2"
            label="Bedrijf 2"
            variant="outlined"
            value={company2}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCompany2(event.target.value);
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {compareResult?.map((el) => (
          <Grid item xs={6}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{el.name}</TableCell>
                    <TableCell>{el.total}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Compare;
