import { Navigate, Outlet, useOutletContext } from 'react-router-dom';
import { IAppContext } from '../../models';

const ProtectedRoute = () => {
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
export default ProtectedRoute;
