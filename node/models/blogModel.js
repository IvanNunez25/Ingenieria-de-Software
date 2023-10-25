import db from "../database/db.js";
import {  DataTypes } from "sequelize";

const blogModel = db.define('nombre de la tabla', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
});

export default blogModel;
