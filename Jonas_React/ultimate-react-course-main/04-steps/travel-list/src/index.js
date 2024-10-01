import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./componests/App";
import Challenge_1 from "./componests/Challenge_1";
import Challenge_2 from "./componests/Challenge_2";
import Exercise_1 from "./componests/Excercise_1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Challenge_2></Challenge_2> */}
    {/* <App /> */}
    <Exercise_1></Exercise_1>
  </React.StrictMode>
);
