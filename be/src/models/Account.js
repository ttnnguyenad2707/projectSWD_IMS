import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const Account = sequelize.define("account", {
    Fullname: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: " "
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Phone: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: " "
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    roleId: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        defaultValue: 1
    },
});


export default Account;