const express = require("express");
const { getProd, getProdById, getDeleteById, postProd, editProd } = require("../controller/controllerProduct");
const router = express.Router();






router.get("/",getProd);
router.get("/:id",getProdById);
router.delete("/:id",getDeleteById);
router.post("/",postProd);
router.put("/:id",editProd);





module.exports= router;