require("dotenv").config();
const connectDB = require("./src/db/connect");
const Product = require("./src/models/products");
const productsData = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(productsData);
    console.log("Database reintialiazed and populated");
    process.exit(0); // okay
  } catch (error) {
    console.error(error);
    process.exit(1); // not okay
  }
};

start();
