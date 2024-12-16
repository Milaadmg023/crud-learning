const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/products.model.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
       res.send("Hello World!");
});

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

mongoose
  .connect(
    `mongodb+srv://bagerim962:${process.env.MONGO_PASS}@backenddb.itfaz.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server runing on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB not connected", err);
  });
