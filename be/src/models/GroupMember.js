import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";

const GroupMember = sequelize.define("group_member", {
    groupId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    accountId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default GroupMember