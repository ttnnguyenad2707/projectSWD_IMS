import issueService from "../service/issueService.js";
import asyncHandler from "./asyncHandler.js"
const issueController = {
  getAllIssue: asyncHandler((req, res) => {
    issueService.listIssue(req, res);
  }),

  createIssue: asyncHandler((req, res) => {
    issueService.createIssue(req, res);
  }),
  
  getIssueDetail: asyncHandler(async (req, res) => {
    issueService.getIssueDetail(req, res);
  }),

  updateIssue: asyncHandler(async (req, res) => {
    issueService.updateIssue(req, res);
  }),
};

export default issueController;
