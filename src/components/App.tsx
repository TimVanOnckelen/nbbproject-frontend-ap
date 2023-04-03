import React, {useEffect} from "react";
import "../App.css";
import Header from "./general/header";
import { Container, Card, CardContent } from "@mui/material";
import { Outlet } from "react-router-dom";
import { BackendApi, IBackendAPI } from "../services/api";

function App() {
  const [api] = React.useState<IBackendAPI>(BackendApi);

  useEffect(() => {
    document.title = 'NBB vergelijker'
  })

  return (
    <Container maxWidth="xl" className="app text-centered">
      <Header />
      <Card sx={{ mt: 2, pt: 2 }}>
        <CardContent>
          <Outlet context={{ api }} />
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
