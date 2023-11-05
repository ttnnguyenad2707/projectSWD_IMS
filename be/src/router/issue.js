import issueController from "../controller/issueController.js";
import express from "express";
import { checkToken, checkTokenStudent } from '../middleware/verifyToken.js';

const issueRouter = express.Router();
issueRouter.post("/", checkToken, checkTokenStudent, issueController.createIssue);
issueRouter.get("/", checkToken, checkTokenStudent, issueController.getAllIssue);
issueRouter.get('/:id', checkToken, checkTokenStudent, issueController.getIssueDetail);
issueRouter.put('/:id', checkToken, checkTokenStudent, issueController.updateIssue);

export default issueRouter;
