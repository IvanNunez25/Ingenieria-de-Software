import React from "react";
import Menu from "./Menu";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";
import '../styles/dashboard.css'

const URI = 'http://localhost:8000/casos/cuentahombres';
const URI2 = 'http://localhost:8000/casos/cuentamujeres';

const Dashboard = () => {

  const [registrosHombres, setRegistrosHombres] = useState([]);
  const [registrosMujeres, setRegistrosMujeres] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const res = await axios.get(URI);
      setRegistrosHombres(res.data);

      const res2 = await axios.get(URI2);
      setRegistrosMujeres(res2.data);

    } catch (error) {
      console.log(error);
    }
  }

  var dataHombres = [
    ["Ciudad", "Cantidad"]
  ]

  registrosHombres.forEach((reg) => {
    dataHombres.push([reg.municipio_association.nombre_mun /*+ ", " + reg.estado.nombre_estado.toUpperCase()*/, reg.cuenta]);
  });

  const options = {
    title: "Decesos de Hombres en ciudades de México durante 2020",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      title: "Total",
      minValue: 0,
    },
    vAxis: {
      title: "Ciudades",
    },
    colors: ['#0B4952']
  };

  // -------------- Datos Mujeres ---------------
  
  var dataMujeres = [
    ["Ciudad", "Cantidad"]
  ]

  registrosMujeres.forEach((reg) => {
    dataMujeres.push([reg.municipio_association.nombre_mun /*+ ", " + reg.estado.nombre_estado*/, reg.cuenta]);
  });

  const optionsMujeres = {
    title: "Decesos de Mujeres en ciudades de México durante 2020",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      title: "Total",
      minValue: 0,
    },
    vAxis: {
      title: "Ciudades",
    },
    colors: ['#520B42']
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
            <div className="area_descripcion">
              <p className="descripcion">Accede a tu cuenta y comienza a generar reportes de toda la información que está a tu disposición</p>
              <Link to="/show"><button>Empezar</button></Link>
            </div>
          </div>
        </div>

        <div className="content-container">
        </div>
        <div className="">
          <div className="">
            <Chart chartType="BarChart" width="100%" height="400px" data={dataMujeres} options={optionsMujeres} />
          </div>
          <div className="">
            <Chart chartType="BarChart" width="100%" height="400px" data={dataHombres} options={options} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;