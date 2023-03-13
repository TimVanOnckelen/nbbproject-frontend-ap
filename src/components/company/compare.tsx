import { Button, TextField, Container, Grid } from "@mui/material";
import React from "react";

const compare = () => {
  return (
    <Container className="container text-centered">
      <Grid container spacing={2}>
        <Grid xs={5}>
          <TextField id="company1" label="Bedrijf 1" variant="outlined" />
        </Grid>
        <Grid xs={2}>
          <Button>Vergelijk</Button>
        </Grid>
        <Grid xs={5}>
          <TextField id="company2" label="Bedrijf 2" variant="outlined" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default compare;
