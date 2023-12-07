const { Router } = require("express");
const temperamentsRoute = Router();
const temperamentsHandler = require("../handlers/temperamentsHandler");
const { getTemperamentsHandler } = temperamentsHandler;

temperamentsRoute.get("/", getTemperamentsHandler);

module.exports = temperamentsRoute;
