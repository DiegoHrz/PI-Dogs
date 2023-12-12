const {
  getDogs,
  getDogsRaza,
  getDogsName,
  postDogs,
} = require("../controllers/dogsController");

const dogsHandler = {};

const axios = require("axios");

dogsHandler.getDogsHandler = async (req, res) => {
  try {
    const response = await getDogs()
    console.log(x);
    res.status(200).send("exito");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.getDogsRaza = (req, res) => {
  try {
    res.status(200).send("get 2 dogos");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.getDogsName = (req, res) => {
  try {
    res.status(200).send("get 3");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

dogsHandler.postDogs = (req, res) => {
  try {
    res.status(200).send("post");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = dogsHandler;
