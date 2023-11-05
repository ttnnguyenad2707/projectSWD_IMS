import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const ClassAccount = sequelize.define("class_account", {
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default ClassAccount;
