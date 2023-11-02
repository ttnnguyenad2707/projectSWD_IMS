import { Issue } from "../models/index.js";

const issueService = {
  createIssue: async (req, res) => {
    try {
      const { title, user_create_id, assign_user_id, description, status, complexity } =
        req.body;
      await Issue.create({
        title: title,
        user_create_id: user_create_id,
        assign_user_id: assign_user_id,
        description: description,
        status: status,
        complexity: complexity
      });
      res.status(200).json({ message: "create issue successful" });
    } catch (error) {
      console.error("Error creating issue:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },  

  listIssue: async (req, res) => {
    try {
      const issues = await Issue.findAll();
      return res.status(200).json({ data: issues });
    } catch (error) {
      console.error("Error get listIssue:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getIssueDetail: async (req, res) => {
    try {
      const issueId = req.params.id;
      const issue = await Issue.findByPk(issueId);

      if (!issue) {
        return res.status(404).json({ message: "Issue not found" });
      }

      return res.status(200).json({ data: issue });
    } catch (error) {
      console.error("Error getting issue detail:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  updateIssue: async (req, res) => {
    try {
      const issueId = req.params.id;
      const {
        title,
        user_create_id,
        assign_user_id,
        description,
        status,
        complexity,
      } = req.body;

      const issue = await Issue.findByPk(issueId);

      if (!issue) {
        return res.status(404).json({ message: "Issue not found" });
      }

      await issue.update({
        title,
        user_create_id,
        assign_user_id,
        description,
        status,
        complexity,
      });

      return res.status(200).json({ message: "Issue updated successfully" });
    } catch (error) {
      console.error("Error updating issue:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default issueService;
