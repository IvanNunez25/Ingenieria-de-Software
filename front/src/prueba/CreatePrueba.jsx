import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/pruebaTabla/';

const ComponenteCreatePrueba = () => {

  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');

  const navigate = useNavigate();

  const store = async(e) => {
    e.preventDefault();
    await axios.post(URI, {
      prueba_nombre: nombre,
      prueba_apellido1: apellido1,
      prueba_apellido2: apellido2
    });
    navigate('/');
  }
  return (
    <div>
      <h3>Crear Registro</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control"></input>

          <label className="form-label">Apellido 1</label>
          <input value={apellido1} onChange={(e) => setApellido1(e.target.value)} type="text" className="form-control"></input>

          <label className="form-label">Apellido2</label>
          <input value={apellido2} onChange={(e) => setApellido2(e.target.value)} type="text" className="form-control"></input>

          <button type="submit" className="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default ComponenteCreatePrueba;