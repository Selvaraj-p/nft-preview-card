// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Root component that renders your Preview Card
import "./index.css"; // Global styles including font and layout

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
