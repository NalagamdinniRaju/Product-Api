const express = require('express');
const { addProductsAndCalculateTotal } = require('../controllers/productController');

const router = express.Router();

// POST endpoint to add products and get the total value
router.post('/add', addProductsAndCalculateTotal);

module.exports = router;
