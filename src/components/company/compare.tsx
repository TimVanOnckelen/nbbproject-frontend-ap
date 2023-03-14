import { Button, TextField, Grid } from "@mui/material";
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
      {compareResult?.map((el) => (
        <div>
          {el.name} - {el.total}
        </div>
      ))}
    </>
  );
};

export default Compare;
