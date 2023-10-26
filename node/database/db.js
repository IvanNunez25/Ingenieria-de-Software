import { Sequelize } from "sequelize";

const db = new Sequelize('pruebaBD', 'root', '',  {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;