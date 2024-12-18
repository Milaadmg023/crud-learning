const express = require("express");
const {getAllProducts , getProductById , addNewProduct , updateProduct , deleteProduct} = require("../controllers/product.controller.js")
const router = express.Router();

// Get all products
router.get("/" , getAllProducts )

// Get product by id
router.get("/:id" , getProductById)

// Add new product
router.post("/" , addNewProduct)

// Update product by id
router.put("/:id" , updateProduct)

// Delete product by id
router.delete("/:id" , deleteProduct)


module.exports = router