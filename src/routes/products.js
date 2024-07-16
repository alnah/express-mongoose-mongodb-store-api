const router = require("express").Router();
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.get("/products", getAllProducts).post("/products", createProduct);

router
  .get("/products/:id", getProduct)
  .patch("/products/:id", updateProduct)
  .delete("/products/:id", deleteProduct);

module.exports = router;
