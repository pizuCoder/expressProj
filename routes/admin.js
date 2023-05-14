const express = require("express");
const router = express.Router();
const path = require('path')

const productControllers = require('../controllers/products')

router.get("/add-product",productControllers.getAddProduct );
router.post("/add-product", productControllers.postProduct);

module.exports = router;
