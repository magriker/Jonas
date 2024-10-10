import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Challenge_1 from "./Challenge_1";
import Challenge_3 from "../../travel-list/src/componests/Challenge_3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Challenge_1></Challenge_1> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
