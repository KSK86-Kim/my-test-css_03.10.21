import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import App from "./components/App";

const arr = [
  {
    test: "все хорошо",
    type: "success",
  },
  {
    test: "кто-то в себе в ногу выстрел",
    type: "error",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App arr={arr} />
  </React.StrictMode>,
  document.getElementById("root")
);
