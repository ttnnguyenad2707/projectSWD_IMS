import { Router } from 'express';
const router  = Router();

router.use('/book',require('./book').default);


export default router