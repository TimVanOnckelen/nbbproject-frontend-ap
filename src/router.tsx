// React
import { createBrowserRouter } from 'react-router-dom';

// Interne onderdelen
import App from './components/App';
import Search from './components/search';
import Login from './components/auth/login';
import ApiTester from './components/general/apiTester';
import Overview from './components/history/overview';
import Compare from './components/company/compare';
import { ProtectedRoute, UnProtectedRoute } from './components/auth/authHandler';
import Logout from './components/auth/logout';
import SignUp from './components/auth/signUp';

// React Router
// Welke onderdelen moeten ingeladen worden als een gebruiker een bepaald pad kiest.
// Start bij App component

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth',
        children: [
          {
            element: <UnProtectedRoute />,
            children: [
              {
                path: 'login',
                element: <Login />,
              },
              {
                path: 'signup',
                element: <SignUp />,
              },
            ],
          },
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: 'logout',
                element: <Logout />,
              },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          { path: '', element: <Compare /> },
          { path: 'compare/:enterprise?', element: <Compare /> },
          {
            path: 'search',
            element: <Search />,
          },
          {
            path: 'api-test',
            element: <ApiTester />,
          },
          {
            path: 'history',
            element: <Overview />,
          },
          {
            path: 'profile',
            element: <Login />,
          },
        ],
      },
    ],
  },
]);
