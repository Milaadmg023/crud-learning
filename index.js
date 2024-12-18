const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.routes.js")
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoutes);

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
