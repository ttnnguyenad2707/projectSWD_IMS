import { DataTypes } from "sequelize";
import sequelize from "../database/mysql.js";
import Project from './Project.js'
import Account from "./Account.js";
const Milestone = sequelize.define("milestone", {
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references :{
            model:Project,
            key: "id"
        }
    },
    user_create_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:Account,
            key: 'id'
        }

    },
    assigned_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Account,
            key: 'id',
        },
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: " "
    },
    description : {
        type: DataTypes.STRING,
        allowNull:true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull:true,
    },
    complexity: {
        type: DataTypes.INTEGER,
        allowNull:false
    },    
});


export default Milestone;