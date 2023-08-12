import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AlertProvider } from "./constants/AuthContext.jsx";
import { SessionProvider } from "./constants/SessionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionProvider>
    <AlertProvider>
    <App />
    </AlertProvider>
    </SessionProvider>
  </React.StrictMode>
);
