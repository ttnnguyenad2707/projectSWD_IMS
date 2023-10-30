import { Sequelize } from "sequelize";

const { DB_NAME, DB_USERNAME, DB_PASSWORD,DB_HOST,DB_DIALECT } = process.env;



const sequelize = new Sequelize(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: DB_DIALECT
    }
);

export default sequelize