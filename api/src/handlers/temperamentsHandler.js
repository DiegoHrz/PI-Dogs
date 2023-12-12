const getTemperaments = require('../controllers/temperamentsController')
const temperamentsHandler = {};

temperamentsHandler.getTemperamentsHandler = (req, res) => {
  try {
    const response = getTemperaments()
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = temperamentsHandler;
