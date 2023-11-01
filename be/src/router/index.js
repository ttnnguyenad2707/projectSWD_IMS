import express from "express";
import router from "./book.js";
import accountRouter from "./account.js";
import classRouter from "./class.js";
import subjectRouter from "./subject.js";
const indexRouter = express.Router();

indexRouter.use("/book", router);
indexRouter.use("/account", accountRouter);
indexRouter.use("/account", accountRouter);
indexRouter.use("/class", classRouter);
indexRouter.use("/subject",subjectRouter);
export default indexRouter;
