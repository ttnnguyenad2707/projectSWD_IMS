import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Class = sequelize.define('Subject',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    name: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
    }
    
})

export default Class;