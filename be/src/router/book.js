import router from 'express';
import book from '../controller/book.controller';

router.post('/',book.createBook);
router.get('/',book.getAllBook);

export default router