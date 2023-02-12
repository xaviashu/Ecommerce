const express = reqquire('express');
const router = express.Router();
{createProduct} = require('../controllers/product');

router.route("/products").get(getAllProducts);
router.route("/product/new").get(createProduct);


module.exports = router;