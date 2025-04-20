const express = require('express');
const route = express.Router();
const googleControllers = require("../controllers/google");
const isAdmin = require("../middlewares/admin").isAuth;

route.post("/edit-tag", isAdmin, googleControllers.editTag);
route.post("/add-new-add", isAdmin, googleControllers.addNewAdd);
module.exports = route