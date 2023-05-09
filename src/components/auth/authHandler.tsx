import * as React from 'react';
import { Navigate, Outlet, useOutletContext } from 'react-router-dom';
import { IAppContext } from '../../models';

export const ProtectedRoute = () => {
  const context = useOutletContext<IAppContext>();

  if (!context.token) {
    return (
      <Navigate
        to='/auth/login'
        replace
      />
    );
  }

  return <Outlet context={context} />;
};

export const UnProtectedRoute = () => {
  const context = useOutletContext<IAppContext>();

  if (context.token) {
    return (
      <Navigate
        to='/compare'
        replace
      />
    );
  }

  return <Outlet context={context} />;
};
