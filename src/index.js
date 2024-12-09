import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";
import "./index.css"; // Убедитесь, что этот импорт присутствует

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
