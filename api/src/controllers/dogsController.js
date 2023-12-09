const { Dog } = require("../db");
const axios = require("axios");

const apiKey =
  "live_50eUeGMbQt6355tLjlq5DGQ0gVtfyN7b05X4NJDAZOPrrsoeAaFEZ2P6IfU5C8cD";
const apiUrl = "https://api.thedogapi.com/v1/breeds";

const getDogs = async () => {
  const { data } = await axios.get(`${apiUrl}?x-api-key=${apiKey}`);

  const mapApi = data.map((dog) => {
    return {name: dog.name}
  });
};

const getDogsRaza = async () => {
  const razaDb = await Dog.findAll();
};

const getDogsName = async () => {};
const postDogs = async () => {};

module.export = { getDogs, getDogsRaza, getDogsName, postDogs };
