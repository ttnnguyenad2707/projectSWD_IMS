import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Subject = sequelize.define('Subject',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
        allowNull:true
    },
    status: {
        type: DataTypes.BOOLEAN,
    }
})

export default Subject;