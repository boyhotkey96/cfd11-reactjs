import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PageProvider } from "./hooks/usePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <PageProvider>
        <App />
      </PageProvider>
  </BrowserRouter>
);
