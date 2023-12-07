const { Router } = require("express");
const dogsRoute = Router();

const dogsHandler = require('../handlers/dogsHandler')
const {getDogsHandler, getDogsRaza, getDogsName, postDogs} = dogsHandler


dogsRoute.get("/", getDogsHandler);

dogsRoute.get("/:id", getDogsRaza);

dogsRoute.get("/name", getDogsName );

dogsRoute.post("/", postDogs);

module.exports = dogsRoute;
