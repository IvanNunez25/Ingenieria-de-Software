import "./App.css";
import React from "react";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";

const data1 = [
  ["Meses ", "datos1", "datos2"],
  ["Febrero", 200, -200],
  ["Marzo", 300, -200],
  ["Abril", 200, -200],
  ["Mayo", 300, -200],
  ["Junio", 100, -100],
];

const data2 = [
  ["Meses ", "datos1", "datos2"],
  ["Julio", 150, -150],
  ["Agosto", 200, -200],
  ["Septiembre", 180, -180],
  ["Octubre", 300, -300],
  ["Noviembre", 200, -200],
];

const data3 = [
  ["Meses ", "datos1", "datos2"],
  ["Diciembre", 250, -250],
  ["Enero", 300, -300],
  ["Febrero", 280, -280],
  ["Marzo", 350, -350],
  ["Abril", 200, -200],
];

const options = {
  legend: { position: "in" },
  isStacked: true,
  bar: { groupWidth: "80%" },
  chartArea: { width: "90%", height: "90%" }, // Para cambiar las dimensiones de las gráficas
  vAxis: {
    viewWindowMode: "explicit",
    viewWindow: {
      max: 400,
      min: -400,
    },
  },
};

export default function Inicio() {
  return (
      <div className="menu-container">
        <div className="menu">
          <button className="menu-button-start">Inicio</button>
          <button className="menu-button">
            <Link to="/datos"className="link-button">Datos</Link>
          </button>
          <button className="menu-button disabled-button">Usuario</button>
          <button className="menu-button disabled-button">Administración</button>
          <button className="menu-button disabled-button">Cerrar Sesión</button>
        </div>
        <div className="content-container">
          <div className="text-container">
            <h1 className="header-label">Bienvenido</h1>
            <h2 className="header-label">Comienza a registrar</h2>
            <p className="main-label">
              Accede a tu cuenta y comienza a generar reportes de toda la
              información que está a tu disposición.
            </p>
          </div>
          <button className="main-button">Empezar</button>
        </div>
        <div className="charts-container">
          <div className="chart">
            <Chart chartType="ColumnChart" data={data1} options={options} />
          </div>
          <div className="chart">
            <Chart chartType="ColumnChart" data={data2} options={options} />
          </div>
          <div className="chart">
            <Chart chartType="ColumnChart" data={data3} options={options} />
          </div>
        </div>
      </div>
  );
}
