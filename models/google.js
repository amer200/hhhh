const mongoose = require("mongoose");

const googleSchema = new mongoose.Schema({
    tag: { type: String, default: "tag tag" },
    adds: [{ code: { type: String, default: "Google tag " } }]
});
module.exports = mongoose.model('Google', googleSchema);