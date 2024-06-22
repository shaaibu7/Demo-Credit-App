import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const database: string = process.env.DB_NAME || 'mydatabase';
const dbUsername: string = process.env.DB_USER || 'root';
const dbPassword: string = process.env.DB_PASSWORD || '12345678';

export const sequelize = new Sequelize(database, dbUsername, dbPassword, {
    host: 'localhost',
    dialect: 'mysql'
});

export const dbConnection: Function = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (error) {
        console.error('Unable to connnect to the database:', error);
    }
}
