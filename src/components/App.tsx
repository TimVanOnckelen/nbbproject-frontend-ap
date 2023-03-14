import React from "react";
import "../App.css";
import Header from "./general/header";
import Compare from "./company/compare";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" className="app text-centered">
      <Header />
      <Compare />
    </Container>
  );
}

export default App;
