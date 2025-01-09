const express = require('express')
const mongoose = require('mongoose')

const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    
  });
  const ProductModel = mongoose.model("Products", ProductSchema);

const app = express()
const port = 3000

app.get("/api/products", async (req, res) => {
    try {
      const products = await ProductModel.find({});
      
      res.status(200).json({ data: products, message: "success!" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });



mongoose.connect('mongodb+srv://farideaazmp202:farideaazmp202@cluster0.prbin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
console.log('Connected!')});





  
 