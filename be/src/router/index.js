import express from "express";
import accountRouter from "./account.js";
import classRouter from "./class.js";

const indexRouter = express.Router();

indexRouter.use("/account", accountRouter);
indexRouter.use("/account", accountRouter);
indexRouter.use("/class", classRouter);
export default indexRouter;

//dồn router vào 1 file code, router cụ thể thì cho vào controller