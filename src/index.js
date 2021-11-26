import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToggleProvider } from "./ToggleContext";

ReactDOM.render(
  <React.StrictMode>
    <ToggleProvider>
      <App />
    </ToggleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
