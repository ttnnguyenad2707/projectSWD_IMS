import express from "express";
import router from "./book.js"
const indexRouter = express.Router();

indexRouter.use('/book',router);


export default indexRouter