import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// Start van de applicatie
// Router laadt de nodige components vanuit router.tsx
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
