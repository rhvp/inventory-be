const express = require('express');
const router = express.Router();
const category = require('../controllers/categoryController');

router.route('/')
    .post(category.create)
    .get(category.getAll)

router.route('/:id')
    .get(category.fetch)

module.exports = router;