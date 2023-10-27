import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/pruebaTabla/';

const ComponenteEditPrueba = () => {

  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');

  const navigate = useNavigate();
  const {id} = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      prueba_nombre: nombre,
      prueba_apellido1: apellido1,
      prueba_apellido2: apellido2
    });

    navigate('/');
  }

  useEffect(() => {
    getBlogById();
  }, []);

  const getBlogById = async () => {
    const res = await axios.get(URI + id);

    setNombre(res.data.prueba_nombre);
    setApellido1(res.data.prueba_apellido1);
    setApellido2(res.data.prueba_apellido2);
  }
  
  return(
    <div>
       <h3>Editar Registro</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control"></input>

          <label className="form-label">Apellido 1</label>
          <input id="apellido1" value={apellido1} onChange={(e) => setApellido1(e.target.value)} type="text" className="form-control"></input>

          <label className="form-label">Apellido2</label>
          <input id="apellido2" value={apellido2} onChange={(e) => setApellido2(e.target.value)} type="text" className="form-control"></input>

          <button type="submit" className="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default ComponenteEditPrueba;