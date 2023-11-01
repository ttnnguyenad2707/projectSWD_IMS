import express from 'express';
import book from '../controller/book.controller.js';
const bookRouter = express.Router();

bookRouter.post('/',book.createBook);
bookRouter.get('/',book.getAllBook);

export default bookRouter