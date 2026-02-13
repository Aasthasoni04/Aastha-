const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const validateProduct = require("../middleware/validate");

router.get("/", productController.getProducts);
router.post("/", validateProduct, productController.addProduct);

module.exports = router;
