import router from 'express';
import book from '../controller/book.controller.js';

router.Router().post('/',book.createBook);
router.Router().get('/',book.getAllBook);

export default router