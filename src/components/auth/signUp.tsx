import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert/Alert';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { IAppContext } from '../../models';
import { useTranslation } from 'react-i18next';

export default function SignUp() {
  const { setToken, api } = useOutletContext<IAppContext>();
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [isSucces, setIsSucces] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      try {
        setIsLoading(true);
        setHasError(false);
        setIsSucces(false);
        const response = await api.user.apiUserPost({
          userName: data.get('username')?.toString()!,
          password: data.get('password')?.toString()!,
          firstName: data.get('firstName')?.toString()!,
          lastName: data.get('lastName')?.toString()!,
        });
        if (response.status < 300) {
          const loginresponse = await api.auth.apiAuthenticationPost({
            userName: data.get('username')?.toString()!,
            password: data.get('password')?.toString()!,
          });

          if (loginresponse.data?.tokenId) {
            setToken(loginresponse.data.tokenId);
            setIsSucces(true);
            navigate('/');
          }
        }
      } catch (e) {
        setHasError(true);
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    },
    [api, setIsLoading, setToken, setIsSucces, navigate]
  );

  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      {hasError && <Alert severity='error'>{t('errors.generic')}</Alert>}
      {isSucces && <Alert severity='success'>{t('auth.succesfullyloging')}</Alert>}

      {isLoading && <CircularProgress />}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          component='h1'
          variant='h5'
        >
          Sign up
        </Typography>
        <Box
          component='form'
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='family-name'
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                required
                fullWidth
                id='username'
                label='username'
                name='username'
                autoComplete='email'
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
