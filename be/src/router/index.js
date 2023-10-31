import router from "express";
import bookRouter from "./book.js"


router.Router().use('/book',bookRouter);


export default router