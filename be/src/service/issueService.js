import { Issue } from "../models/Index.js";

const issueService = {
  createIssue: async (req, res) => {
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
  },

  listIssue: async (req, res) => {
    try {
      const issues = await Issue.findAll();
      return res.status(200).json({ data: issues });
    } catch (error) {
      console.error("Error get listIssue:", error);
    }
  },
};

export default issueService;
