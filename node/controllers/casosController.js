import blogModel from '../models/blogModel.js';
import { casosModelo, estadosModelo, municipiosModelo } from '../models/casosModelo.js';
import { Sequelize } from "sequelize";

/* Obtener todos los registros */
export const getAllCasos = async (req, res) => {
  try {
    const casos = await casosModelo.findAll({
      attributes: ['fecha_defuncion', 'fecha_registro', 'sexo', 'edad', 'id', 'entidad', 'mun'],
      include: [
        {
          model: estadosModelo,
          attributes: ['nombre_estado'],
          where: {
            id: Sequelize.col('casos.entidad'),
          }         
        },
        {
          model: municipiosModelo,
          as: 'municipio_association',
          attributes: ['nombre_mun'],
          where: {
            id: Sequelize.col('casos.mun')
          }
        }
      ],
      where: {
        mun: {
          [Sequelize.Op.not]: null // Filtrar registros donde 'mun' no sea nulo
        }
      },
      order: [['id', 'ASC']],
      limit: 800
    })
    res.json(casos);
  } catch (error) {
    res.json({ 'mensaje': error.message });
  }
};

// Obtener un registro

export const getCaso = async(req, res) => {
  try {
    const caso = await casosModelo.findAll({
      attributes: ['fecha_defuncion', 'fecha_registro', 'sexo', 'edad', 'id', 'entidad', 'mun'],
      include: [
        {
          model: estadosModelo,
          attributes: ['nombre_estado'],
          where: {
            id: Sequelize.col('casos.entidad'),
          }         
        },
        {
          model: municipiosModelo,
          as: 'municipio_association',
          attributes: ['nombre_mun'],
          where: {
            id: Sequelize.col('casos.mun')
          }
        }
      ],
      where: {
        id: req.params.id
      },
      order: [['id', 'ASC']],
    })
    res.json(caso[0]);
  } catch (error) {
    res.json({'mensaje': error.message});
  }
}

// Crear un registro
export const createCaso = async (req, res) => {
  try {
    await casosModelo.create(req.body);
    res.json({
      'mensaje': 'Registro creado correctamente'
    })
  } catch (error) {
    res.json({ 'mensaje': error.menssage });
  }
}

// Actualizar un registro
export const updateCaso = async(req, res) => {
  try {
    await casosModelo.update(req.body, {
      where: {id: req.params.id}
    });
    res.json({ 'mensaje': 'Registro actualizado correctamente' })
  } catch (error) {
    res.json({'mensaje': error.message});
  }
}

export const deleteCaso = async(req, res) => {
  try {
    await casosModelo.destroy({
      where: {id: req.params.id}
    });
    res.json({ 'mensaje': 'Registro eliminado correctamente' });
  } catch (error) {
    res.json({ 'mensaje': error.message });
  }
}

/* obtener hombres por municipio */
export const getCuentaHombresPorMunicipio = async (req, res) => {
  try {
    console.log("-------------------- CONSULTA -------------------");
    const casos = await casosModelo.findAll({
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('casos.id')), 'cuenta']
      ],
      include: [
        {
          model: estadosModelo,
          attributes: ['nombre_estado'],
          where: {
            id: Sequelize.col('casos.entidad'),
          }         
        },
        {
          model: municipiosModelo,
          as: 'municipio_association',
          attributes: ['nombre_mun'],
          where: {
            id: Sequelize.col('casos.mun')
          }
        }
      ],
      where: {
        sexo: 1,
      },
      group: ['nombre_mun', 'nombre_estado'], // Agrupar por municipio y estado
      order: [[Sequelize.literal('cuenta'), 'DESC']], // Ordenar por cuenta en orden descendente
      limit: 10
    });

    res.json(casos);

  } catch (error) {
    res.json({ mensaje: error.message });
  }
};

/* obtener mujeres por municipio */
export const getCuentaMujeresPorMunicipio = async (req, res) => {
  try {
    console.log("-------------------- CONSULTA -------------------");
    const casos = await casosModelo.findAll({
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('casos.id')), 'cuenta']
      ],
      include: [
        {
          model: estadosModelo,
          attributes: ['nombre_estado'],
          where: {
            id: Sequelize.col('casos.entidad'),
          }         
        },
        {
          model: municipiosModelo,
          as: 'municipio_association',
          attributes: ['nombre_mun'],
          where: {
            id: Sequelize.col('casos.mun')
          }
        }
      ],
      where: {
        sexo: 2,
      },
      group: ['nombre_mun', 'nombre_estado'], // Agrupar por municipio y estado
      order: [[Sequelize.literal('cuenta'), 'DESC']], // Ordenar por cuenta en orden descendente
      limit: 10
    });

    res.json(casos);

  } catch (error) {
    res.json({ mensaje: error.message });
  }
};
