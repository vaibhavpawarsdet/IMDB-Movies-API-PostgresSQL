module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
        title: { 
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        rating: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return Movie;
};