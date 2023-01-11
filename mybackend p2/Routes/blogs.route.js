import express from 'express';
import { deleteBlog, getAllBlogs, getBlog, postBlog, updateBlog } from '../Controllers/blog.controller.js';

export const blogRoute =express.Router();

blogRoute.get('/', getAllBlogs)

blogRoute.get('/:user',getBlog)

blogRoute.post('/createblog', postBlog)

blogRoute.put('/update/:id',updateBlog)

blogRoute.delete('/:id',deleteBlog)