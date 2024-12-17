const Product = require("../models/products.model.js");

const getAllProducts = async (req, res) => {
       try {
              const products = await Product.find();
              res.status(200).json(products);
       } catch (err) {
              res.status(400).json({ message: err.message });
       }
};

module.exports = { getAllProducts };