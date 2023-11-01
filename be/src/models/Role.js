import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Role = sequelize.define("role", {
    roleName: {
        type: DataTypes.STRING,
    }
});


export default Role;