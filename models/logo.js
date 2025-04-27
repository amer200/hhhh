const mongoose = require("mongoose");

const logoSchema = new mongoose.Schema({
    img: String
});
module.exports = mongoose.model('Logo', logoSchema);