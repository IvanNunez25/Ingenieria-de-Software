import express from 'express'
//import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/blogController.js';
import { getAllCasos } from '../controllers/casosController.js';
const router = express.Router();

router.get('/', getAllCasos);
// router.get('/:id', getBlog);
// router.post('/', createBlog);
// router.put('/:id', updateBlog);
// router.delete('/:id', deleteBlog);

export default router;