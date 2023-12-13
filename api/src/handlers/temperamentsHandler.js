const getTemperaments = require("../controllers/temperamentsController");
const temperamentsHandler = {};

temperamentsHandler.getTemperamentsHandler = async (req, res) => {
  try {
    const response = await getTemperaments();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = temperamentsHandler;
