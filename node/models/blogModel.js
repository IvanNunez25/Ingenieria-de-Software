import db from "../database/db.js";
import {  DataTypes } from "sequelize";

const blogModel = db.define('pruebaTabla', {
    prueba_id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    prueba_nombre: {type: DataTypes.STRING},
    prueba_apellido1: {type: DataTypes.STRING},
    prueba_apellido2: {type: DataTypes.STRING}
}, {
    tableName: 'pruebaTabla',
    timestamps: false, // Agrega esta línea para desactivar las marcas de tiempo
    underscored: true
});

export default blogModel;
