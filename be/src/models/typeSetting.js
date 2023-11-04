import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const typeSetting = sequelize.define("typeSetting", {
  name: {
    type: DataTypes.STRING,
    allowNull:false,
  },  
}, {
  timestamps: true,
  paranoid: true,
});

export default typeSetting;