const express = require('express');
const router = express.Router();
const product = require('../controllers/productController');

router.route('/')
    .post(product.create)
    .get(product.get)

router.route('/:id')
    .get(product.fetch)

module.exports = router;