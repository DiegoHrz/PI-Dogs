const { Router } = require("express");
const temperamentsRoute = Router();

temperamentsRoute.get('/',(req,res)=>{
  try {
    res.status(200).send('get temp')
  } catch (error) {
    res.status(404).json({error: error.message})
  }
})

module.exports = temperamentsRoute;
