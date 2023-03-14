import React from "react";
import "../App.css";
import Header from "./general/header";
import Compare from "./company/compare";
import { Card, CardContent, Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="xl" className="app text-centered">
      <Header />
      <Card sx={{ mt: 2, pt: 2 }}>
        <CardContent>
          <Compare />
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
