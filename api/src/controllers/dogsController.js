const { Dog } = require("../db");
const { Temperaments } = require("../db");
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
    const { data } = await axios.get(`${API_URL}?api_key=${API_KEY}`);

    const allBreedsApiMap = await data.map((dog) => {
      return {
        id: dog.id,
        name: dog.name,
        image: dog.image.url,
        weight: dog.weight.imperial,
        temperament: dog.temperament,
      };
    });

    return allBreedsApiMap;
  };

  const breedsDb = await allBreedsDb();
  const breedsApi = await allBreedsApi();
  const allBreeds = [...breedsDb, ...breedsApi];

  if (name) {
    const breedsFound = allBreeds.filter(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );

    if (!breedsFound.length) {
      throw new Error(`No se encontraron razas con el name:${name}`);
    }
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

  const { data } = await axios.get(`${API_URL}?api_key=${API_KEY}`);

  const foundBreed = data.find((dog) => dog.id === +id);
  return foundBreed;
};

//get dogs name

//post dogs
const createDogs = async (
  name,
  min_height,
  max_height,
  min_weight,
  max_weight,
  lifespan,
  image,
  temperaments
) => {
  const newDog = await Dog.create({
    name,
    min_height,
    max_height,
    min_weight,
    max_weight,
    lifespan,
    image,
    temperaments,
  });
  temperaments.forEach(async (tem) => {
    let temperamentsDb = await Temperaments.findAll({ where: { name: tem } });
    await newDog.addTemperaments(temperamentsDb);
  });
  return newDog;
};
//al usar thunder client
//1ro llamas

module.exports = { getAllBreeds, getBreedId, createDogs };
