const express = require('express')
const productRouter = require('./routes/productRoute')
const app = express()
const port = 8080



app.use(express.json());
app.use("/api/products", productRouter);

const mongoose = require('mongoose');
  
mongoose.connect('mongodb+srv://farideaazmp202:farideaazmp202@cluster0.prbin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
        console.log('Connected!')
    });


 