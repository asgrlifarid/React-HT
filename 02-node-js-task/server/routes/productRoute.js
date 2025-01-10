const express = require("express");
const {
  getAllProduct,
  getProductById,
  deleteProduct,
  postProduct,
  editProduct,
} = require("../controllers/productController");

const router = express.Router();


router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.post("/", postProduct);
router.put("/:id", editProduct);


module.exports = router;