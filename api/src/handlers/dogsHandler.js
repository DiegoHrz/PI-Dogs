const {
  getAllBreeds,
  getBreedId,
  createDogs,
} = require("../controllers/dogsController");

const dogsHandler = {};

const axios = require("axios");

dogsHandler.getAllBreedsHandler = async (req, res) => {
  try {
    const respuesta = await getAllBreeds();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.getBreedIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getBreedId(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.getDogsNameHandler = async (req, res) => {
  try {

    const respuesta = await getAllBreeds(name);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.createDogsHandler = (req, res) => {
  try {
    const { reference_image_id, name, height, weight, lifespan } = req.body;
    const respuesta = createDogs(
      reference_image_id,
      name,
      height,
      weight,
      lifespan
    );
    //es un 201 porque a parte de que todo este bien se creo algo
    res.status(201).json(respuesta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = dogsHandler;
