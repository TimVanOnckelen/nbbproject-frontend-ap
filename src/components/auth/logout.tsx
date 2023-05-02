import * as React from 'react';
import { useOutletContext } from 'react-router-dom';
import { IAppContext } from '../../models';
import { Alert } from '@mui/material';

export const Logout = () => {
  const { setToken } = useOutletContext<IAppContext>();

  React.useEffect(() => {
    setToken('');
  }, [setToken]);

  return (
    <>
      <Alert>Logged out succesfully.</Alert>
    </>
  );
};

export default Logout;
