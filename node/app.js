import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import blogRoutes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/pruebaTabla', blogRoutes);

try {
  await db.authenticate();
  console.log('Conexión exitosa a la Base de Datos');
} catch (error) {
  console.log('Error al conectarse a la Base de Datos: ', error);
}

// app.get('/', (req, res) => {
//   res.send('Hola mundo');
// });

app.listen(8000, () => {
  console.log('Servidor corriendo en: http://localhost:8000/');
})