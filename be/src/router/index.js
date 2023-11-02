import express from "express";
import accountRouter from "./account.js";
import classRouter from "./class.js";
import projectRouter from "./project.js";

const indexRouter = express.Router();

indexRouter.use("/account", accountRouter);
indexRouter.use("/account", accountRouter);
indexRouter.use("/class", classRouter);
indexRouter.use("project",projectRouter)
export default indexRouter;
