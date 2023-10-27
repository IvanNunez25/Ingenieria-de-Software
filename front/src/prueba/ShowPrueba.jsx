import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/pruebaTabla/';

const ComponenteShowPrueba = () => {

  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  // Obtener todos los registros
  const getBlogs = async () => {
    try{
      const res = await axios.get(URI);
      setRegistros(res.data); 
    } catch (error) {
      console.log(error);
    }
    
  }

  // Eliminar un registro
  const deleteBlog = async (id) => {
    await axios.delete(`${URI}${id}`);
    getBlogs();
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>

          <Link to='/create' className='btn btn-primary mt-2 mb-2'><i class="fa-regular fa-square-plus"></i></Link>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido Paterno</th>
                <th scope="col">Apellido Materno</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              { registros.map( registro => (
                <tr key={registro.prueba_id}>
                  <td> {registro.prueba_nombre} </td>
                  <td> {registro.prueba_apellido1} </td>
                  <td> {registro.prueba_apellido2} </td>
                  <td> 
                    { <Link to={`/edit/${registro.prueba_id}`} className='btn btn-info'><i class="fa-regular fa-pen-to-square"></i>Editar</Link>}
                    <button onClick={ () => deleteBlog(registro.prueba_id)} className='btn btn-danger'><i class="fa-solid fa-delete-left"></i>Delete</button>      
                  </td>
                </tr>
              )) }
            </tbody>
          </table> 
            
        </div>
      </div>
    </div>
  );
}

export default ComponenteShowPrueba;