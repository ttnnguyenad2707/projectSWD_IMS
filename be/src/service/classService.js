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
      students,
    } = req.body;

    try {
      const createdClass = await Class.create({
        class_name: class_name,
        code: code,
        semester: semester,
        subject_id: subject_id,
        teacher_id: teacher_id,
        status_class: status,
      });

      const createdClassId = createdClass.id;

      for (const element of students) {
        await ClassAccount.create({
          classId: createdClassId,
          accountId: element,
        });
      }

      console.log("Created Class ID:", createdClassId);

      res
        .status(200)
        .json({ message: "Create successful", data: createdClass });
    } catch (error) {
      console.error("Error creating class:", error);
      res.status(500).json({ message: "Error creating class", error });
    }
  },
  listClass: async (req, res) => {
    try {
      const classes = await Class.findAll();
      const classData = [];

      for (const classObj of classes) {
        const classAccounts = await ClassAccount.findAll({
          where: { classId: classObj.id },
        });

        classData.push({
          ...classObj.toJSON(),
          student_ids: classAccounts.map((ca) => ca.accountId),
        });
      }

      res.status(200).json({ data: classData });
    } catch (error) {
      console.error("Error in listClass:", error);
      res.status(500).json({ error: "Error listing classes" });
    }
  },
};

export default classService;
