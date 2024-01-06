require("dotenv").config();
const { API_KEY, API_URL } = process.env;

const axios = require("axios");
const { Temperaments } = require("../db");

const getTemperaments = async () => {
  const temperamentsDB = await Temperaments.findAll();

  if (!temperamentsDB.length) {
    const { data } = await axios.get(`${API_URL}?api_key=${API_KEY}`);

    const temperaments = Array.from(
      new Set(
        data.reduce((arrayVacio, dog) => {
          if (dog.temperament) {
            const tempArray = dog.temperament
              .split(",")
              .map((temp) => temp.trim());
            arrayVacio.push(...tempArray);
          }
          return arrayVacio;
        }, [])
      )
    );

    await Promise.all(
      temperaments
        .filter((tem) => tem) // Eliminar elementos vacíos
        .map(async (tem) => {
          await Temperaments.findOrCreate({
            where: { name: tem },
          });
        })
    );

    return temperaments;
  }

  return temperamentsDB.map((tem) => tem.name);
};

module.exports = { getTemperaments };
