const { Router } = require("express");
const dogsRoute = Router();

const dogsHandler = require('../handlers/dogsHandler')
const {getAllBreedsHandler, getBreedIdHandler, getDogsNameHandler, createDogsHandler} = dogsHandler


dogsRoute.get("/", getAllBreedsHandler);

dogsRoute.get("/:id", getBreedIdHandler);

dogsRoute.get("/name", getDogsNameHandler );

dogsRoute.post("/", createDogsHandler);

module.exports = dogsRoute;
