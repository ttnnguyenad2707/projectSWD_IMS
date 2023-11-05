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
    references: {
      model: Class,
      key: "id"
    }
  },
  TeamLeader: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
    references: {
      model: Account,
      key: "id"
    }
  },
  Status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  TeacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Account,
      key: "id"
    }
  }

});

export default Project;