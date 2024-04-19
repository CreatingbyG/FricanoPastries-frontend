const express = require('express');
const { addNewProduct } = require('../controllers/products');
const router = express.Router();

router.post('/', addNewProduct);

module.exports = router;