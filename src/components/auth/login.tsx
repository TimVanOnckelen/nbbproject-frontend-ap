import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
import { IAppContext } from '../../models';
import { Button, TextField, Grid, Box, Alert, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Login = () => {
  const { setToken, api } = useOutletContext<IAppContext>();
  const [username, setUser] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { t } = useTranslation();
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

  const handleLogin = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const doLogin = async () => {
        e.preventDefault();
        setHasError(false);
        setIsLoading(true);
        try {
          const response = await api.auth.apiAuthenticationPost({ userName: username, password: password });
          if (response.status === 200 && response.data.tokenId) {
            setToken(response.data?.tokenId);
          } else {
            setHasError(true);
          }
        } catch (e) {
          setHasError(true);
          console.log(e);
        } finally {
          setIsLoading(false);
        }
      };
      doLogin().catch((e) => console.log(e));
    },
    [api, password, username, setToken, setHasError]
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
        {hasError && <Alert severity='error'>{t('auth.nomatch')}</Alert>}
        <h2>{t('auth.login')}</h2>

        {isLoading && <CircularProgress />}

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
                  label={t('auth.username')}
                  placeholder={t('auth.username')!}
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
                  label={t('auth.password')}
                  placeholder={t('auth.password')!}
                  onChange={changePassword}
                />
              </>
            </Grid>
            <Grid>
              {' '}
              <Button type='submit'>{t('auth.login')}</Button>
            </Grid>
          </form>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
