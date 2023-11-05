import { Class } from "../models/Index.js";

const classService = {
  createClass: async (req, res) => {
    const { class_name, code, semester, subject_id, teacher_id, status } =
      req.body;
    await Class.create({
      class_name: class_name,
      code: code,
      semester: semester,
      subject_id: subject_id,
      teacher_id: teacher_id,
      status_class: status,
    }).then(data => {
      res.status(200).json({ message: "create successful",data });
    });
    
  },
  listClass: async (req, res) => {
    try {
      const classes = await Class.findAll();
      return res.status(200).json({ data: classes });
    } catch (error) {
      console.error("Error in listClass:", error);
    }
  },
};

export default classService;
