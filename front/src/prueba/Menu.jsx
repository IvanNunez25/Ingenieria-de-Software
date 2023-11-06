import React from "react";
import { Link } from "react-router-dom";
import '../styles/menu.css'

const Menu = () => {

  return (
    <div className="menu">
      <div className="menu__titulo">
        Menú principal
      </div>
      <div className="menu__opciones">

        <Link to={'/'}>
          <div className="menu__opciones-opcion">
            <i className="bi bi-house"></i> Inicio
          </div>
        </Link>
        
        <Link to={'/show'}>
          <div className="menu__opciones-opcion">
            <i className="bi bi-bar-chart-fill"></i> Datos
          </div>
        </Link>
        <div className="menu__opciones-opcion">
          <i className="bi bi-sliders2"></i> Administración
        </div>

        <div className="menu__opciones-opcion">
          <i className="bi bi-person-circle"></i> Usuarios
        </div>

      </div>
    </div>
  );
}

export default Menu;