import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PageProvider } from "./hooks/usePage";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PageProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PageProvider>
  </BrowserRouter>
);
