import express from "express";
import accountRouter from "./account.js";
const indexRouter = express.Router();

indexRouter.use('/account',accountRouter)
indexRouter.use('/account',accountRouter)



export default indexRouter