const dbCOnfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbCOnfig.DB, dbCOnfig.USER, dbCOnfig.PASSWORD, {
    host: dbCOnfig.HOST,
    dialect: dbCOnfig.dialect,
    operatorAliases: false,

    pool: {
        max: dbCOnfig.pool.max,
        min: dbCOnfig.pool.min,
        acquire: dbCOnfig.pool.acquire,
        idle: dbCOnfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movies = require("./movie.model.js")(sequelize, Sequelize);

module.exports = db;