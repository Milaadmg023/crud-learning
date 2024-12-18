const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/products.model.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", require("./routes/product.routes.js"));

// connect to db
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
