const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js");
const app = express()

// Use this when your application needs to handle requests where the body contains JSON data.
app.use(express.json());
// Use this middleware when your application needs to handle form submissions or 
// other scenarios where the data is sent in URL-encoded format (like application/x-www-form-urlencoded).
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Home Page os CRUD app")
})

// get all products

    // app.get('/api/products', async (req, res) => {
    //     try {
    //         const product = await Product.find({});
    //         res.status(200).json(product);
    //     }
    //     catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // });


// get product by id
    // app.get('/api/products/:id', async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const product = await Product.findById(id);
    //         res.status(200).json(product);
    //     }
    //     catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // });


// update a product

    // app.put('/api/products/:id', async (req, res) => {
    //     try {
    //         //res.send(req.params);
    //         const { id } = req.params;
    //         const product = await Product.findByIdAndUpdate(id, req.body);
    //         if (!product) {
    //             return res.status(404).json({ message: "Product not found" });
    //         }
    //         const updatedProduct = await Product.findById(id);
    //         res.status(200).json(updatedProduct);


    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // });

// delete a product

    // app.delete('/api/products/:id', async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const product = await Product.findByIdAndDelete(id);
    //         if (!product) {
    //             return res.status(404).json({ message: "Product not found" });
    //         }
    //         res.status(200).json({ message: "Product deleted successfully" });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }

    // })

// create new product

    // app.post('/api/products', async (req, res) => {
    //     try {
    //         const product = await Product.create(req.body);
    //         res.status(200).json(product);
    //     }
    //     catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // });


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