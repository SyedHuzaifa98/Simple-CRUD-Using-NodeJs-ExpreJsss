const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js");
const authRoute = require("./routes/auth.route.js");

dotenv.config();
const app = express()

// Use this when your application needs to handle requests where the body contains JSON data.
app.use(express.json());
// Use this middleware when your application needs to handle form submissions or 
// other scenarios where the data is sent in URL-encoded format (like application/x-www-form-urlencoded).
app.use(express.urlencoded({extended:false}));

//routes

app.use("/api/products", productRoute);
app.use("/api/auth", authRoute);



app.get('/', (req, res) => {
    res.send("Home Page os CRUD app")
})


mongoose.connect('mongodb://127.0.0.1:27017/crud')
    .then(() => {
        console.log("DB: Connected..!")
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        })
    })
    .catch((error) => {
        console.error("DB: Connection failed!", error);
    });