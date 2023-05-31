const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: "postgres",
    pool: {
        max: 4,
        min: 0,
        acquire: 30000,
        idle: 15000
    } 
};