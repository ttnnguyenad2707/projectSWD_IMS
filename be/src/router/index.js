import express from "express";
import accountRouter from "./account.js";
import classRouter from "./class.js";
import projectRouter from "./project.js";
import issueRouter from "./issue.js"
import subjectRouter from "./subject.js";
const indexRouter = express.Router();

indexRouter.use("/account", accountRouter);
indexRouter.use("/issue", issueRouter);
indexRouter.use("/class", classRouter);
indexRouter.use("/project",projectRouter)
indexRouter.use("/subject",subjectRouter);
export default indexRouter;

//dồn router vào 1 file code, router cụ thể thì cho vào controller