import express from "express";
import accountRouter from "./account.js";
import classRouter from "./class.js";
import projectRouter from "./project.js";
import issueRouter from "./issue.js"
import subjectRouter from "./subject.js";
import settingRouter from "./setting.js";
const indexRouter = express.Router();

indexRouter.use("/account", accountRouter);
indexRouter.use("/issue", issueRouter);
indexRouter.use("/class", classRouter);
indexRouter.use("/project",projectRouter)
indexRouter.use("/subject",subjectRouter);
indexRouter.use("/setting",settingRouter);
export default indexRouter;