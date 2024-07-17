const Product = require("../models/product");

const getAllProducts = async (req, res, next) => {
  const { featured, company, name, sort } = req.query;
  const query = {};

  featured ? (query.featured = featured === "true") : false;
  company ? (query.company = company) : null;
  name ? (query.name = { $regex: name, $options: "i" }) : null;

  let result = Product.find(query);
  result = sort
    ? result.sort(sort.split(",").join(" "))
    : result.sort("createdAt");

  const products = await result;
  res.status(200).json({ products, query });
};

const createProduct = (req, res, next) => {
  res.status(200).json({ message: "create product" });
};

const getProduct = (req, res, next) => {
  res.status(200).json({ message: "get product" });
};

const updateProduct = (req, res, next) => {
  res.status(200).json({ message: "update product" });
};

const deleteProduct = (req, res, next) => {
  res.status(200).json({ message: "delete product" });
};

module.exports = {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
