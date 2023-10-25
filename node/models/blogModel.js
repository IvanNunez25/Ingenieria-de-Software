import db from "../database/db";
import { DataType, DataTypes } from "sequelize";

const blogModel = db.define('nombre de la tabla', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
});

export default blogModel;
