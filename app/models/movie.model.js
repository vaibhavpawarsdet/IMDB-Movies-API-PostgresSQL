module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        release_date: {
            type: Sequelize.STRING
        },
        language: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }    
    }); 
    return Movie;
};