const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;
const Rrouter =require("./route/routeProduct")
const cors = require("cors");

app.use(cors()); 
app.use(express.json());
app.use("/api/products", Rrouter);

mongoose
  .connect(
    "mongodb+srv://farideaazmp202:farideaazmp202@cluster0.prbin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
  console.log("Connected!")});
