import { Class, ClassAccount } from "../models/Index.js";

const classService = {
  createClass: async (req, res) => {
    const {
      class_name,
      code,
      semester,
      subject_id,
      teacher_id,
      status,
      student_ids,
    } = req.body;

    const createdClass = await Class.create({
      class_name: class_name,
      code: code,
      semester: semester,
      subject_id: subject_id,
      teacher_id: teacher_id,
      status_class: status,
    }).then((data) => {
      const createdClassId = createdClass.id;
      student_ids.array.forEach((element) => {
        ClassAccount.create({
          classId: createdClassId,
          accountId: element,
        });
      });

      res.status(200).json({ message: "create successful", data });
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
