import blogModel from '../models/blogModel.js'

/* Métodos del CRUD */

// Obtener todos los registros
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ 'mensaje': error.message });
  }
}

// Mostrar un registro
export const getBlog = async (req, res) => {
  try {
    const blog = blogModel.findAll({
      where: {id: req.params.id}
    })
    res.json(blog);
  } catch (error) {
    res.json({ 'mensaje': error.message });
  }
}

// Crear un registro
export const createBlog = async (req, res) => {
  try {
    await blogModel.create(req.body);
    res.json({
      'mensaje': 'Registro creado correctamente'
    })
  } catch (error) {
    res.json({ 'mensaje' : error.message });
  }
}

// Actualizar un registro
export const updateBlog = async (req, res) => {
  try {
    blogModel.update(req.body, {
      where: {id: req.params.id}
    });
    res.json({
      'mensaje': 'Registro actualizado correctamente'
    })
  } catch (error) {
      res.json({ 'mensaje' : error.message });
  }
}

// Eliminar un registro
export const deleteBlog = async (req, res) => {
  try {
    blogModel.destroy({
      where: {id: req.params.id}
    });
    res.json({
      'mensaje': 'Registro eliminado correctamente'
    })
  } catch (error) {
      res.json({ 'mensaje' : error.message });
  }
}