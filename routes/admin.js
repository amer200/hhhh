const express = require('express');
const route = express.Router();
const adminController = require("../controllers/admin");
const isAdmin = require("../middlewares/admin").isAuth;


route.get("/", isAdmin, adminController.getIndex)
route.get("/servs", isAdmin, adminController.getServ)
route.get("/offers", isAdmin, adminController.getOffer)
route.get("/google", isAdmin, adminController.getGoogle);
route.get("/logo", isAdmin, adminController.getLogo);
route.get("/slide", isAdmin, adminController.getSlide);
route.get("/log-in", adminController.getLogin);
route.post("/log-in", adminController.logIn);
route.get("/log-out", isAdmin, adminController.logOut);
module.exports = route