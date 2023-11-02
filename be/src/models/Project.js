import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";
import Account from "./Account.js";
import Class from "./Class.js";

const Project = sequelize.define("project", {
  ProjectCode: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "IMS000"
  },
  ProjectName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false,
defaultValue: 1,
    references :{
      model: Class,
      key: "id"
    }
  },
  TeamLeader: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  
});

export default Project;