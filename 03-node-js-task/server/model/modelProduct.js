const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  explaination: String,
  country: String,
  imgURL: String,
});
const ProductModel = mongoose.model("Products", blogSchema);
module.exports = ProductModel;
