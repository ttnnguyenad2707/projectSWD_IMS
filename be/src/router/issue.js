import issueController from "../controller/issueController.js";
import express from "express";

const issueRouter = express.Router();
issueRouter.post("/", issueController.createIssue);
issueRouter.get("/", issueController.getAllIssue);
issueRouter.get('/:id', issueController.getIssueDetail);
issueRouter.put('/:id', issueController.updateIssue);

export default issueRouter;
