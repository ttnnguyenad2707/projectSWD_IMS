import issueController from "../controller/issueController.js";
import express from "express";

const issueRouter = express.Router();
issueRouter.post("/", issueController.createIssue);
issueRouter.get("/issues", issueController.getAllIssue);

export default issueRouter;
