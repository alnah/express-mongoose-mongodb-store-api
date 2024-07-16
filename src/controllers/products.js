const getAllProducts = (req, res, next) => {
  res.status(200).json({ message: "get all products" });
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
  deleteProduct
}