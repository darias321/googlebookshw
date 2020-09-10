var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BookSchema = new Schema({
  authors: {
    type: [String],
  },

  description: {
    type: String,
  },

  image: {
    type: String,
  },

  link: {
    type: String,
  },

  title: {
    type: String,
  },
});

const Book = mongoose.model("books", BookSchema);

module.exports = Book;
