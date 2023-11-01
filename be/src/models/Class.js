import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Class = sequelize.define("class", {
  class_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
  },
  semester: {
    type: DataTypes.STRING,
  },
  subject_id: {
    type: DataTypes.INTEGER,
  },
  teacher_id: {
    type: DataTypes.INTEGER,
  },
  status_class: {
    type: DataTypes.INTEGER,
  },
});

export default Class;
