import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";
import Class from "./Class.js";

const Group = sequelize.define("group", {
    classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Class,
            key: "id",
        }
    }

    
});

export default Group