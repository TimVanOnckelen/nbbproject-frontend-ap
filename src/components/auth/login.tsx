import * as React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { IAppContext } from '../../models';
import { Button, TextField, Grid, Box, Alert } from '@mui/material';

export const Login = () => {
  const { setToken, api } = useOutletContext<IAppContext>();
  const [username, setUser] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [hasError, setHasError] = React.useState<boolean>(false);

  const changePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.currentTarget.value);
    },
    [setPassword]
  );
  const changeUser = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser(e.currentTarget.value);
    },
    [setUser]
  );

  const navigate = useNavigate();

  const handleLogin = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const doLogin = async () => {
        e.preventDefault();
        setHasError(false);
        try {
          const response = await api.auth.apiAuthenticationPost({ userName: username, password: password });
          if (response.status === 200 && response.data.tokenId) {
            setToken(response.data?.tokenId);
            navigate('/history');
          } else {
            setHasError(true);
          }
        } catch (e) {
          setHasError(true);
          console.log(e);
        }
      };
      doLogin().catch((e) => console.log(e));
    },
    [api, password, username, setToken, navigate, setHasError]
  );

  return (
    <>
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {hasError && <Alert severity='error'>Username and password do not match. Please try again.</Alert>}
        <h2>Login</h2>

        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <form onSubmit={handleLogin}>
            <Grid>
              <>
                <TextField
                  type='text'
                  name='username'
                  label='Username'
                  placeholder='username'
                  onChange={changeUser}
                  sx={{ m: 1 }}
                />
              </>
            </Grid>
            <Grid>
              <>
                <TextField
                  type='password'
                  name='password'
                  label='Password'
                  placeholder='password'
                  onChange={changePassword}
                />
              </>
            </Grid>
            <Grid>
              {' '}
              <Button type='submit'>Login</Button>
            </Grid>
          </form>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
