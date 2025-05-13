const express = require('express');
const route = express.Router();
const slideControllers = require("../controllers/slide");
const isAdmin = require("../middlewares/admin").isAuth;
route.post('/add', isAdmin, slideControllers.add);
route.post('/edit/:id', isAdmin, slideControllers.edit);
route.get("/remove/:id", isAdmin, slideControllers.remove);
module.exports = route