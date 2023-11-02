import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const ProjectMember = sequelize.define("ProjectMember", {
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    accountId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default ProjectMember