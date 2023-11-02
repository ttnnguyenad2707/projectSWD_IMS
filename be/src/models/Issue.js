import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Issue = sequelize.define("issue", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_create_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assign_user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  complexity: {
    type: DataTypes.STRING,
  },
  
}, {
  timestamps: true,
  paranoid: true,
});

export default Issue;
