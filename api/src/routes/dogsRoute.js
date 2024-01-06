const { Router } = require("express");
const dogsRoute = Router();

const dogsHandler = require("../handlers/dogsHandler");
const {
  getAllBreedsHandler,
  getBreedIdHandler,
  getDogsNameHandler,
  createDogsHandler,
  deleteDogHandler,
} = dogsHandler;

dogsRoute.get("/", getDogsNameHandler);

dogsRoute.get("/", getAllBreedsHandler);

dogsRoute.get("/:id", getBreedIdHandler);

dogsRoute.post("/", createDogsHandler);

dogsRoute.delete("/:id", deleteDogHandler);

module.exports = dogsRoute;
