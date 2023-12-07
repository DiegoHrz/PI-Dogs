const temperamentsHandler = {};
const getDogs = require('../controllers/dogsController')

temperamentsHandler.getTemperamentsHandler = (req, res) => {
  try {
    res.status(200).send("get tempi");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = temperamentsHandler;
