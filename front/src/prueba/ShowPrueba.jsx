import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Menu from './Menu';
import '../styles/dashboard.css'

const URI = 'http://localhost:8000/casos/';

const ComponenteShowPrueba = () => {

  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  // Obtener todos los registros
  const getBlogs = async () => {
    try {
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

  const registrosTrans = registros.map((reg) => {
    return {
      id: reg.id,
      fecha_defuncion: reg.fecha_defuncion,
      fecha_registro: reg.fecha_registro,
      sexo: reg.sexo === 1 ? 'H' : 'M',
      edad: reg.edad,
      estado: reg.estado.nombre_estado,
      municipio: reg.municipio_association.nombre_mun,
      acciones: (
        <div>
          <Link to={`/edit/${reg.prueba_id}`} className='btn btn-info'>
            <i className="fa-regular fa-pen-to-square"></i> Editar
          </Link>
          <button onClick={() => deleteBlog(reg.id)} className='btn btn-danger tabla__registros_boton'>
            <i className="fa-solid fa-delete-left"></i> Delete
          </button>
        </div>
      )
    };
  });

  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Fecha Defunción',
        field: 'fecha_defuncion',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Fecha Registro',
        field: 'fecha_registro',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Sexo',
        field: 'sexo',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Edad',
        field: 'edad',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Estado',
        field: 'estado',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Municipio',
        field: 'municipio',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Acciones',
        field: 'acciones',
        sort: 'asc',
        width: 100,
      }
    ],
    rows: registrosTrans
  }

  return (
    <div className='dashboard'>
      <div>
        <Menu />
      </div>
      <div className='row tabla__registros'>
        <div className='col'>

          <div className=''>
            <Link to='/create' className='btn btn-primary mt-2 mb-2'>
              <i class="fa-regular fa-square-plus"></i> Agregar nuevo registro
            </Link>
          </div>
          {console.log(data)}
          <MDBDataTable
            striped
            bordered
            small
            data={data}
          />

        </div>
      </div>
    </div>
  );
}

export default ComponenteShowPrueba;