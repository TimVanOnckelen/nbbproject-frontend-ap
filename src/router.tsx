import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Search from "./components/search";
import Login from "./components/auth/login";

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
]);
