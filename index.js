const express = require('express');
const productRoutes = require('./routes/productRoutes');
const { initializeDB } = require('./database/sqlite');

const app = express();
const PORT = 5000;

// Middleware to parse JSON data
app.use(express.json());

// Initialize SQLite DB
initializeDB();

// API routes
app.use('/api/products', productRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
