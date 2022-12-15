import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowseRouter} from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowseRouter>
      <App />
    </BrowseRouter>
  </React.StrictMode>
);
