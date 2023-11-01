import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";
import Account from "./Account.js";

const Project = sequelize.define("project", {
    ProjectCode: {
        type: DataTypes.STRING, 
        allowNull: false,
        defaultValue: "IMS000"
    },
    ProjectName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Class: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "SE1635-NJ",
    },
    TeamLeader: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Member: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
        defaultValue: [],
        references: {
            model: Account,
            key:"id"
        }
    }
    
});


export default Project;