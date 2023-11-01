import express from "express";
import router from "./book.js";
import accountRouter from "./account.js";
import classRouter from "./class.js";

const indexRouter = express.Router();

indexRouter.use("/book", router);
indexRouter.use("/account", accountRouter);
indexRouter.use("/account", accountRouter);
indexRouter.use("/class", classRouter);
export default indexRouter;
