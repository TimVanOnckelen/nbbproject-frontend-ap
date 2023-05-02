// React
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Visuele onderdelen
import '../App.css';
import { Container, Card, CardContent } from '@mui/material';

// Interne onderdelen
import Header from './general/header';
import { BackendApi, IBackendAPI } from '../services/api';
import { AxiosRequestConfig } from 'axios';

interface IJWTToken {
  exp: 1683050022;
  iss: 'http://localhost:42070';
  aud: 'http://localhost:42070';
}

// Het App onderdeel wordt altijd ingeladen. Daarin zit altijd het Header component.
// Via het Outlet component wordt dan een ander component ingeladen.
// Zie router.tsx
function App() {
  const localToken = sessionStorage.getItem('token');
  const [api] = React.useState<IBackendAPI>(BackendApi);
  const [token, setToken] = React.useState<string | null>(localToken);
  const [callConfig, setCallConfig] = React.useState<AxiosRequestConfig>();

  const parseJwt = (token: string) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    if (token) {
      const parsedToken: IJWTToken = parseJwt(token);
      if (parsedToken.exp >= Date.now() / 1000) {
        sessionStorage.setItem('token', token);
        setCallConfig({
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // Token is expired, unset token
        // Make call for new token?
        setToken(null);
        sessionStorage.removeItem('token');
        setCallConfig({});
      }
    } else {
      sessionStorage.removeItem('token');
      setCallConfig({});
    }
  }, [token]);

  return (
    <Container
      maxWidth='xl'
      className='app text-centered'
    >
      <Header token={token} />
      <Card sx={{ mt: 2, pt: 2 }}>
        <CardContent>
          <Outlet context={{ api, token, setToken, callConfig }} />
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
