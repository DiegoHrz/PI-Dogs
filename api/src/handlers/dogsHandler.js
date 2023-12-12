const {
  getAllBreeds,
  getBreedId,
  getDogsName,
  createDogs,
} = require("../controllers/dogsController");

const dogsHandler = {};

const axios = require("axios");

dogsHandler.getAllBreedsHandler = async (req, res) => {
  try {
    const respuesta = await getAllBreeds()
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.getBreedIdHandler= (req, res) => {
  try {
    res.status(200).send("get 2 dogos");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.getDogsNameHandler = (req, res) => {
  try {
    res.status(200).send("get 3");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.createDogsHandler = (req, res) => {
  try {
    res.status(200).send("post");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = dogsHandler;
