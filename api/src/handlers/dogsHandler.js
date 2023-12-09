const {getDogs, getDogsRaza, getDogsName, postDogs} = require('../controllers/dogsController')

const dogsHandler = {};

dogsHandler.getDogsHandler = (req, res) => {
  try {

    res.status(200).send("get 1 dog");
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
