import express from 'express'
import { getAllCasos, getCaso, createCaso, updateCaso, deleteCaso, getCuentaHombresPorMunicipio, getCuentaMujeresPorMunicipio } from '../controllers/casosController.js';
const router = express.Router();

router.get('/cuentahombres/', getCuentaHombresPorMunicipio);
router.get('/cuentamujeres/', getCuentaMujeresPorMunicipio);
router.get('/', getAllCasos);
router.get('/:id', getCaso);

router.post('/', createCaso);
router.put('/:id', updateCaso);
router.delete('/:id', deleteCaso);

export default router;