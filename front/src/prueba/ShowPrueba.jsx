import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/casos/';

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
                <th scope="col">ID</th>
                <th scope="col">Fecha Defunción</th>
                <th scope="col">Fecha Registro</th>
                <th scope="col">Sexo</th>
                <th scope="col">Edad</th>
                <th scope="col">Estado</th>
                <th scope="col">Municipio</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              { registros.map( registro => (
                <tr key={registro.id}>
                  <td> {registro.id} </td>
                  <td> {registro.fecha_defuncion} </td>
                  <td> {registro.fecha_registro} </td>
                  <td> {registro.sexo == 1 ? 'H' : 'M'} </td>
                  <td> {registro.edad} </td>
                  <td> {registro.estado.nombre_estado} </td>
                  <td> {registro.municipio_association.nombre_mun} </td>
                  <td> 
                    { <Link to={`/edit/${registro.prueba_id}`} className='btn btn-info'><i class="fa-regular fa-pen-to-square"></i> Editar</Link>}
                    <button onClick={ () => deleteBlog(registro.prueba_id)} className='btn btn-danger'><i class="fa-solid fa-delete-left"></i> Delete</button>      
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