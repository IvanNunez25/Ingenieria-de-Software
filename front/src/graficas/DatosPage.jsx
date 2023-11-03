import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function DatosPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    domicilio: "",
    codigoPostal: "",
    ciudad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se pueden manejar los datos ingresadossssss.
    console.log(formData);
  };

  return (
      <div className="menu-container">
        <div className="menu">
          <button className="menu-button">
            <Link to="/" className="link-button">
              Inicio
            </Link>
          </button>
          <button className="menu-button-start">Datos </button>
          <button className="menu-button disabled-button">Usuario</button>
          <button className="menu-button disabled-button">Administración</button>
          <button className="menu-button disabled-button">Cerrar Sesión</button>
        </div>
      <div className="form-container">
        <h1>Ingresa tus datos</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="domicilio">Domicilio</label>
            <input
              type="text"
              id="domicilio"
              name="domicilio"
              value={formData.domicilio}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="codigoPostal">Código Postal</label>
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ciudad">Ciudad</label>
            <select
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
            >
              <option value="">Selecciona una ciudad</option>
              <option value="ciudad1">Ciudad 1</option>
              <option value="ciudad2">Ciudad 2</option>
              <option value="ciudad3">Ciudad 3</option>
            </select>
          </div>
          <button type="submit" className="formu-button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
export default DatosPage;
