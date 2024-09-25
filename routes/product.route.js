const express = require("express");
const router = express.Router();
const {getProducts,getProduct, updateProduct,deleteProduct,createProduct} = require("../controllers/product.controller.js");
const auth = require("../middleware/auth.js");

router.get("/", auth, getProducts);
router.get("/:id", auth, getProduct);
router.put("/:id", auth, updateProduct);
router.post("/", auth, createProduct);
router.delete("/:id", auth, deleteProduct);


module.exports = router;