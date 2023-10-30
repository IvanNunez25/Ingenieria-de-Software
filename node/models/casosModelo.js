import db from "../database/db.js";
import { DataTypes } from "sequelize";

export const casosModelo = db.define('casos', {
  entidad: { type: DataTypes.NUMBER },
  municipio: { type: DataTypes.NUMBER },
  fecha_defuncion: { type: DataTypes.STRING },
  fecha_registro: { type: DataTypes.STRING },
  sexo: { type: DataTypes.NUMBER },
  edad: { type: DataTypes.NUMBER },
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  mun:{ type: DataTypes.NUMBER }
  }, {
    tableName: 'casos',
    timestamps: false,
    underscored: true
});

export const estadosModelo = db.define('estados', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true
  },
  nombre_estado: {type: DataTypes.STRING}
  }, {
    tableName: 'EstadosMexicanos',
    timestamps: false,
    underscored: true
});

export const municipiosModelo = db.define('municipios', {
  estado: {type: DataTypes.NUMBER},
  id_mun: {type: DataTypes.NUMBER},
  nombre_mun: {type: DataTypes.STRING},
  id: { 
    type: DataTypes.NUMBER,
    primaryKey: true
  }}, {
  tableName: 'municipios',
  timestamps: false,
  underscored: true
})

casosModelo.belongsTo(estadosModelo, { foreignKey: 'entidad', targetKey: 'id' });
estadosModelo.hasMany(casosModelo, { foreignKey: 'entidad', sourceKey: 'id' });

casosModelo.belongsTo(municipiosModelo, { foreignKey: 'mun', targetKey: 'id', as: 'municipio_association' });
municipiosModelo.hasMany(casosModelo, { foreignKey: 'mun', sourceKey: 'id', as: 'municipio_association' });

// estadosModelo.hasMany(municipiosModelo, { foreignKey: 'estado', sourceKey: 'id' });
// municipiosModelo.belongsTo(estadosModelo, { foreignKey: 'estado', targetKey: 'id' });
municipiosModelo.hasMany(estadosModelo, { foreignKey: 'estado', sourceKey: 'id', as: 'estado_association' });
estadosModelo.belongsTo(municipiosModelo, { foreignKey: 'estado', targetKey: 'id', as: 'estado_association' });


