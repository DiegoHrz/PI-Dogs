const { Dog, Temperaments } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY, API_URL } = process.env;

//get dogs

const getAllBreeds = async (name) => {
  // get dogs breed in the db
  const allBreedsDb = async () => {
    let breedsDb = await Dog.findAll({
      include: {
        model: Temperaments,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    const modifiedBreeds = breedsDb.map((dog) => {
      const temperamentsNames = dog.Temperaments.map((temp) => temp.name);

      return {
        ...dog.dataValues,
        Temperaments: temperamentsNames,
        origin: "db",
      };
    });
    return modifiedBreeds;
  };

  // get dogs breed in the api
  const allBreedsApi = async () => {
    const { data } = await axios.get(`${API_URL}?api_key=${API_KEY}`);

    const allBreedsApiMap = await data.map((dog) => {
      let [min_weight, max_weight] = dog.weight.metric.split("-");
      let [min_height, max_height] = dog.height.metric.split("-");

      let temperamentsArray = dog.hasOwnProperty("temperament")
        ? dog.temperament.split(/\s*(?:,|$)\s*/)
        : "";

      return {
        id: dog.id,
        name: dog.name,
        image: dog.image.url,
        min_weight: +min_weight || min_weight, // por si es string o num
        max_weight: +max_weight || max_weight,
        min_height: +min_height || min_height,
        max_height: +max_height || max_height,
        Temperaments: temperamentsArray,
        bred_for: dog.bred_for || "none",
        breed_group: dog.breed_group || "none",
        lifespan: dog.life_span || "none",
      };
    });

    return allBreedsApiMap;
  };

  const breedsDb = await allBreedsDb();
  const breedsApi = await allBreedsApi();
  const allBreeds = [...breedsDb, ...breedsApi];

  //query get dogs name (breed)
  if (name) {
    const lowerCaseName = name.toLowerCase();

    const breedsFound = allBreeds.filter((dog) => {
      const dogName = dog.name.toLowerCase();
      const wordsInDogName = dogName.split(" ");
      if (wordsInDogName.includes(lowerCaseName)) {
        return true;
      }
      return false;
    });

    if (!breedsFound.length) {
      throw new Error(`No se encontraron razas con el name: ${name}`);
    }

    return breedsFound;
  }

  return allBreeds;
};

//get dogs idRaza
const getBreedId = async (id) => {
  const allDoggiesDbAndApi = await getAllBreeds();

  //para num
  if (!isNaN(id)) {
    const foundBreed = allDoggiesDbAndApi.find((doggie) => doggie.id === +id);
    return foundBreed;
  }
  // y para un uuid (string)
  const foundBreed = allDoggiesDbAndApi.find((doggie) => doggie.id === id);
  return foundBreed;
};

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
    await newDog.addTemperaments(temperamentsDb); // mixins
  });
  return newDog;
};

//delete dog

const deletedDog = async (id) => {
  const dogDeleted = await Dog.findByPk(id);
  await dogDeleted.destroy();
};

module.exports = { getAllBreeds, getBreedId, createDogs, deletedDog };
