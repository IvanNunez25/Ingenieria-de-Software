import React from "react";
import Menu from "./Menu";
import '../styles/dashboard.css'

const Dashboard = () => {

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
            <button className="boton"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;