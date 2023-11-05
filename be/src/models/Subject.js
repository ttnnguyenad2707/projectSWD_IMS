import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Subject = sequelize.define('subjects',{
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
        allowNull:true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

export default Subject;