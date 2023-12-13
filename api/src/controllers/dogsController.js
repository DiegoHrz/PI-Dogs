const { Dog } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;

//const URL = `${apiUrl}/${id}?api_key=${apiKey}`

//get dos
const getAllBreeds = async () => {
  const { data } = await axios.get(`${API_URL}`, {
    params: {
      "x-api-key": API_KEY,
    },
  });

  const allBreedsApi = data.map((dog) => {
    return { name: dog.name };
  });
  return allBreedsApi;
};

//get dogs idRaza
const getBreedId = async (id) => {
  if (isNaN(id)) {
    const foundBreed = await Dog.findById(id);
    return findBreed;
  }

  const { data } = await axios.get(`${API_URL}`, {
    params: {
      "x-api-key": API_KEY,
    },
  });

  const foundBreed = data.find((dog) => dog.id === +id);
  return foundBreed
};

//get dogs name
const getDogsName = async () => {};

//post dogs
const createDogs = async (image_url, name, height, weight, lifespan) => {
  const newDog = await Dog.create({
    image_url,
    name,
    height,
    weight,
    lifespan,
  });
};

module.exports = { getAllBreeds, getBreedId, getDogsName, createDogs };
