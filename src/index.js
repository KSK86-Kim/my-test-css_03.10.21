import React from "react";
import ReactDOM from "react-dom";
import "modern-normalize/modern-normalize.css";
import App from "./components/App";

const arr1 = [
  {
    chapter: "product",
    text: "Продукты",
    value: "5 000.00",
  },
  {
    chapter: "product",
    text: "Продукты",
    value: "5 000.00",
  },
  {
    chapter: "product",
    text: "Продукты",
    value: "5 000.00",
  },
  {
    chapter: "product",
    text: "Продукты",
    value: "5 000.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "entertainment",
    text: "Развлечение",
    value: "800.00",
  },
  {
    chapter: "healthier",
    text: "Здоровье",
    value: "900.00",
  },
  {
    chapter: "transport",
    text: "Транспорт",
    value: "2 000.00",
  },
  {
    chapter: "housing",
    text: "все для дома",
    value: "1 500.00",
  },
  {
    chapter: "technique",
    text: "техника",
    value: "800.00",
  },
  {
    chapter: "communal-communication",
    text: "коммуналка, связь",
    value: "2 200.00",
  },
  {
    chapter: "sport-hobby",
    text: "спорт,              хобби",
    value: "1 800.00",
  },
  {
    chapter: "education",
    text: "образование",
    value: "2 400.00",
  },
  {
    chapter: "other",
    text: "прочее",
    value: "3 000.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
];
const arr2 = [
  {
    chapter: "product",
    text: "Продукты",
    value: "5 000.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
  {
    chapter: "alcohol",
    text: "Алкоголь",
    value: "200.00",
  },
];
ReactDOM.render(
  <React.StrictMode>
    <App arr={arr1} />
  </React.StrictMode>,
  document.getElementById("root")
);
