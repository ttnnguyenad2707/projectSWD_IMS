const Class = require("../models/class");

const MyClass = {
  getAllClass: async (req, res) => {
    res.send("All class");
  },
  createClass: async (req, res) => {
    try {
      const result = await Class.create({
        class_name: "SWD",
      });
      return res.status(200).json(result);
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = MyClass;
