import React from "react";
import Menu from "./Menu";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import '../styles/dashboard.css'

const Dashboard = () => {

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
  

  return (
    <div className="dashboard">
      <div className="dashboard__menu">
        <Menu />
      </div>
      <div className="dashboard__window">
        <div className="dashboard__window-titulo">
          <h1>Bienvenido</h1>
          <div className="dashboard__window-mensaje">
            <p className="titulo">Comienza a registrar</p>
            <p className="descripcion">Accede a tu cuenta y comienza a generar reportes de toda la información que está a tu disposición</p>
            <button className="boton">Empezar</button>
          </div>
        </div>

        <div className="content-container">
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
    </div>
  );
}

export default Dashboard;