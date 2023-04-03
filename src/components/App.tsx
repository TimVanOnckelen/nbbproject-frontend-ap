// React
import React from "react";
import { Outlet } from "react-router-dom";

// Visuele onderdelen
import "../App.css";
import { Container, Card, CardContent } from "@mui/material";

// Interne onderdelen
import Header from "./general/header";
import { BackendApi, IBackendAPI } from "../services/api";

// Het App onderdeel wordt altijd ingeladen. Daarin zit altijd het Header component.
// Via het Outlet component wordt dan een ander component ingeladen.
// Zie router.tsx
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
