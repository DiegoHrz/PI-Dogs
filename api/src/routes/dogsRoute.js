const { Router } = require("express");
const dogsRoute = Router();

dogsRoute.get("/", (req, res) => {
  try {
    res.status(200).send("get 1");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

dogsRoute.get("/:idRaza", (req, res) => {
  try {
    res.status(200).send("get 2");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

dogsRoute.get("/name", (req, res) => {
  try {
    res.status(200).send("get 3");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

dogsRoute.post("/", (req, res) => {
  try {
    res.status(200).send("post");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = dogsRoute;
