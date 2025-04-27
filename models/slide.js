const mongoose = require("mongoose");

const slideSchema = new mongoose.Schema({
    img: String
});
module.exports = mongoose.model('Slide', slideSchema);