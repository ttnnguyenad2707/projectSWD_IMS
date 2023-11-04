import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";
import typeSetting from "./typeSetting.js";

const Setting = sequelize.define("setting", {
  name: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  type: {
    type: DataTypes.INTEGER,
    references: {
      model: typeSetting,
      key: "id",
    }
  },
  status : {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  }  
}, {
  timestamps: true,
  paranoid: true,
});

export default Setting;
