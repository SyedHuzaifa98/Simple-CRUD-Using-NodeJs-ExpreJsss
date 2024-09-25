const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: false
    }
},
    {
        timestamps: true // this will add 2 extra field created at updated at
    }
);

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;