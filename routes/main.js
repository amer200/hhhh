const express = require('express');
const route = express.Router();
const mainController = require("../controllers/main")
route.get("/", mainController.getIndex)
module.exports = route
