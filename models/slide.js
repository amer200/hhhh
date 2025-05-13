const mongoose = require('mongoose');

const sliderImageSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  altText: { type: String, default: '' }
});

module.exports = mongoose.model('SliderImage', sliderImageSchema);