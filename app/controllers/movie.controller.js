const db = require('../models');
const Movie = db.movies;
const Op = db.Sequelize.Op;

//create and save new movie
exports.create = (req, res) => {
    //Validate request
    if (!req.body.title) {
        res.sendStatus(400).send({
            message: "content can not be empty"
        });
        return;
    }    

    //create movie
    const movie = {
        title: req.body.title,
        description: req.body.description,
        release_date: req.body.release_date,
        language: req.body.language,
        published: req.body.published ? req.body.published : false
    };

    //Save movie in the database
    Movie.create(movie).then(data => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "some error occured while creating Movie"
        });
    });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    Movie.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch((err) => {
        res.sendStatus(500).send({
            message: err.message || "Error occured while tetrieving movies."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Movie.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `cannot find movies with id=${id}`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving movie with id= " + id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Movie.update(req.body, {
        where: {id: id}
    }).then((num) => {
        if (num == 1) {
            res.send({ message: "Movie was updated successfully"});
        } else {
            res.send({ message: `Cannot update movie with id=${id}`});
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating Movie with id= " +id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Movie.destroy({
        where: { id : id}
    }).then((num) => {
        if (num == 1) {
            res.send({ message: "Movie was deleted successfully"})
        } else {
            res.send({ message: `Cannot delete Movie with id=${id}`})
        }
    }).catch((err) => {
        res.status(500).send({ message: "could not delete Movie with id= " + id})
    });
};