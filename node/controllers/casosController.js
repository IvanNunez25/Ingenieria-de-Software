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
          },
          // include: [
          //   {
          //     model: estadosModelo,
          //     as: 'estado_association', 
          //     attributes: [],
          //     where: {
          //       id: Sequelize.col('municipios.estado')
          //     },
          //   }
          // ]
        }
      ],
      where: {
        mun: {
          [Sequelize.Op.not]: null // Filtrar registros donde 'mun' no sea nulo
        }
      },
      order: [['id', 'ASC']],
      limit: 10000
    })
    res.json(casos);
  } catch (error) {
    res.json({ 'mensaje': error.message });
  }
};
