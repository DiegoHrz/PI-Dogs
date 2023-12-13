require("dotenv").config();
const { API_KEY, API_URL } = process.env;

const axios = require("axios");
const { Temperaments } = require("../db");

const getTemperaments = async () => {
    const temperamentsDB = await Temperaments.findAll();
  
    if (!temperamentsDB.length) {
      const { data } = await axios.get(API_URL, {
        params: {
          "x-api-key": API_KEY,
        },
      });
  
      const temperaments = Array.from(
        new Set(
          data.reduce((acc, dog) => {
            if (dog.temperament) {
              const tempArray = dog.temperament.split(',').map((temp) => temp.trim());
              acc.push(...tempArray);
            }
            return acc;
          }, [])
        )
      );
  
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
  };
  
  module.exports = getTemperaments;
  