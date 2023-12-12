const { Dog } = require("../db");
const axios = require("axios");
require("dotenv").config();
const {API_KEY} = process.env;


//const URL = `${apiUrl}/${id}?api_key=${apiKey}`

const getDogs = async () => {
    const  {data}  = await axios.get(`https://api.thedogapi.com/v1/breeds/`, {
      params: {
        "x-api-key":
          API_KEY,
      },
    });
    console.log(data)
return data
};

//breeds by id
const getDogsRaza = async () => {
  const razaDb = await Dog.findAll();
};

const getDogsName = async () => {};
const postDogs = async () => {};

module.exports = { getDogs, getDogsRaza, getDogsName, postDogs };
