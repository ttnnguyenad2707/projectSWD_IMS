const { DataTypes } = require("sequelize");
const sequelize = require("../database/mysql");

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
  status: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Class;
