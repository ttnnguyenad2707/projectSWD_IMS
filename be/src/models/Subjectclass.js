import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const SubjectClass = sequelize.define('SubjectClass', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
})
export default SubjectClass