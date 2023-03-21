import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Search from "./components/search";
import Login from "./components/auth/login";
import ApiTester from "./components/general/apiTester";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/api-test",
    element: <ApiTester />,
  },
]);
