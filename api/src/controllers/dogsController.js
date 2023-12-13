const { Dog } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;

//const URL = `${apiUrl}/${id}?api_key=${apiKey}`

//get dogs
// and get dogs name (breed)
const getAllBreeds = async (name) => {
  // get dogs breed in the db
  const allBreedsDb = async () => {
    const breedsDb = await Dog.findAll();
    return breedsDb;
  };

  // get dogs breed in the api
  const allBreedsApi = async () => {
    const { data } = await axios.get(`${API_URL}`, {
      params: {
        "x-api-key": API_KEY,
      },
    });
    const allBreedsApiMap = data.map((dog) => {
      return { name: dog.name };
    });

    return allBreedsApiMap;
  };

  const breedsDb = await allBreedsDb();
  const breedsApi = await allBreedsApi();
  const allBreeds = [...breedsDb, ...breedsApi];

  if (name) {
    const breedsFound = allBreeds.filter((dog) => dog.name === name);
    return breedsFound;
  }
  return allBreeds;
};

//get dogs idRaza
const getBreedId = async (id) => {
  if (isNaN(id)) {
    const foundBreed = await Dog.findByPk(id);
    return foundBreed;
  }

  const { data } = await axios.get(`${API_URL}`, {
    params: {
      "x-api-key": API_KEY,
    },
  });

  const foundBreed = data.find((dog) => dog.id === +id);
  return foundBreed;
};

//get dogs name

//post dogs
const createDogs = async (
  reference_image_id,
  name,
  height,
  weight,
  lifespan
) => {
  const newDog = await Dog.create({
    reference_image_id,
    name,
    height,
    weight,
    lifespan,
  });
  return newDog;
};

module.exports = { getAllBreeds, getBreedId, createDogs };
