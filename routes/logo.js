const express = require('express');
const route = express.Router();
const logoControllers = require("../controllers/logo");
const isAdmin = require("../middlewares/admin").isAuth;

route.post("/add", isAdmin, logoControllers.add);
module.exports = route