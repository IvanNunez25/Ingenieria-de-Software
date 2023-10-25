import { Sequelize } from "sequelize";

const db = new Sequelize('nombre de la BD', 'root', 'password',  {
    host: 'localhost',
     dialect: 'mysql'
});

export default db;