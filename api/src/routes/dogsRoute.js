const { Router } = require("express");
const dogsRoute = Router();

const dogsHandler = require('../handlers/dogsHandler')
const {getAllBreedsHandler, getBreedIdHandler, getDogsNameHandler, createDogsHandler} = dogsHandler


dogsRoute.get("/", getDogsNameHandler );

dogsRoute.get("/", getAllBreedsHandler);

dogsRoute.get("/:id", getBreedIdHandler);

dogsRoute.post("/", createDogsHandler);

module.exports = dogsRoute;
