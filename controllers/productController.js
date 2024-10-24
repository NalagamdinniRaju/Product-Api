const { insertProducts } = require('../models/productModel');

// Handle request to add products and calculate the total value
const addProductsAndCalculateTotal = (req, res) => {
    const products = req.body;

    if (!Array.isArray(products) || products.length === 0) {
        return res.status(400).json({ message: 'Invalid product list provided' });
    }

    // Insert products into the database
    insertProducts(products, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error inserting products' });
        }

        // Calculate the total value of products (sum of price * quantity)
        const totalValue = products.reduce((acc, product) => {
            return acc + (product.price * product.quantity);
        }, 0);

        // Send the total value in response
        res.status(200).json({ totalValue });
    });
};

module.exports = { addProductsAndCalculateTotal };
