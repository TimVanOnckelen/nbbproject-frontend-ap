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

// Het App onderdeel wordt altijd ingeladen. Daarin zit altijd het Header component.
// Via het Outlet component wordt dan een ander component ingeladen.
// Zie router.tsx
function App() {
  const [api] = React.useState<IBackendAPI>(BackendApi);
  const [token, setToken] = React.useState<string>();
  const [callConfig, setCallConfig] = React.useState<AxiosRequestConfig>();

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setCallConfig({
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      localStorage.removeItem('token');
      setCallConfig({});
    }
  }, [token]);

  useEffect(() => {
    document.title = 'NBB vergelijker';
  });

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
