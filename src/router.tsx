import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Search from "./components/search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //   loader: rootLoader,
    // children: [
    //   {
    //       path: "team",
    //       element: <Team />,
    //     //   loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/search",
    element: <Search />,
  },
]);
