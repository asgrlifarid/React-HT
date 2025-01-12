const express = require("express");
const {
  getProd,
  getProdById,
  getDeleteById,
  postProd,
  editProd,
  searchByTitle,
} = require("../controller/controllerProduct");
const router = express.Router();

router.get("/", getProd);
router.get("/product/:id", getProdById);
router.get("/search", searchByTitle);
router.delete("/:id", getDeleteById);
router.post("/", postProd);
router.put("/:id", editProd);

module.exports = router;
