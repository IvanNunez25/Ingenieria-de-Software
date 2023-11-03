import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Inicio from './Inicio';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DatosPage from "./DatosPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/datos" element={<DatosPage />} />
  </Routes>
</BrowserRouter>,
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
