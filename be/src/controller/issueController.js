import issueService from "../service/issueService.js";
import asyncHandler from "../utils/asyncHandler.js";
const issueController = {
  getAllIssue: (req, res) => {
    issueService.listIssue(req, res);
  },
  createIssue: asyncHandler((req, res) => {
    issueService.createIssue(req, res);
  }),
};

export default issueController;
