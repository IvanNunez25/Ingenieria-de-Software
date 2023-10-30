import express from 'express'
//import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/blogController.js';
import { getAllCasos, getCaso, createCaso, updateCaso, deleteCaso } from '../controllers/casosController.js';
const router = express.Router();

router.get('/', getAllCasos);
router.get('/:id', getCaso);
router.post('/', createCaso);
router.put('/:id', updateCaso);
router.delete('/:id', deleteCaso);

export default router;