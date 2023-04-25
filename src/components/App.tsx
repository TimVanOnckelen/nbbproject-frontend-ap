// React
import React, {useEffect, useState} from "react";
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
  const [token, setToken] = useState<string>("NotAnID");

  const generateToken = async () => {
    let myToken = await api?.token.apiTokenPost({userName:"Pablo", password:"QWERTY"});
    if(myToken.data.tokenId)
      setToken(myToken.data.tokenId);
  }

  useEffect(() => {
    document.title = 'NBB compare';
    generateToken();
    setTimeout(()=> {
      console.log(token)
    },3000)
  })

  return (
    <Container maxWidth="xl" className="app text-centered">
      <Header />
      <Card sx={{ mt: 2, pt: 2 }}>
        <CardContent>
          <Outlet context={{ api, token }} />
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
