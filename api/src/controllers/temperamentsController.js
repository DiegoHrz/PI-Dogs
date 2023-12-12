require("dotenv").config();
const { API_KEY, API_URL } = process.env;

const axios = require("axios");
const { Temperaments } = require("../db");

const getTemperaments = async () => {
  try {
    const temperamentsDB = await Temperaments.findAll();

    if (!temperamentsDB.length) {
      const { data } = await axios.get(API_URL, {
        params: {
          "x-api-key": API_KEY,
        },
      });

      const temperaments = Array.from(new Set(data.map((temp) => temp.temperament)));

      for (const tem of temperaments) {
        if (tem) {
          await Temperaments.findOrCreate({
            where: { name: tem },
          });
        }
      }

      return temperaments;
    }

    return temperamentsDB.map((tem) => tem.name);
  } catch (error) {
    // Manejar errores, por ejemplo, loggearlos o lanzar una excepción
    console.error("Error in getTemperaments:", error);
    throw error;
  }
};

module.exports = getTemperaments;
