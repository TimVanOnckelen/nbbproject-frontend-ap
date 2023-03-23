import React from "react";
import "../App.css";
import Header from "./general/header";
import { Container, Card, CardContent } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container maxWidth="xl" className="app text-centered">
      <Header />
      <Card sx={{ mt: 2, pt: 2 }}>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
