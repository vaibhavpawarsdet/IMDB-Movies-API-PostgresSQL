module.exports = app => {
    const movies = require("../controllers/movie.controller.js");

    const router = require("express").Router();

    //create a new movie
    router.post("/", movies.create);

    //retrieve all movies
    router.get("/", movies.findAll)

    //retrieve single movie with id
    router.get("/:id", movies.findOne);

    //update movie with id
    router.put("/:id", movies.update);

    //delete a movie with id
    router.delete("/:id", movies.delete);

    app.use("/api/movies", router);
}