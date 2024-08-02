const mongoose = require('mongoose');

const books = mongoose.Schema({
id: { type: Number, required: true },
  userId : { type: String, required: true },
  title : { type: String, required: true },
  author: { type: String, required: true },
  imageUrl : { type: String, required: true },
  year : { type: Number, required: true },
  genre : { type: String, required: true },
  ratings : [{
    userId : { type: Number, required: true },
    grade: { type: Number, required: true }
  }],
  averageRating: { type: Number, required: true }
});

module.exports = mongoose.model('Books', books);