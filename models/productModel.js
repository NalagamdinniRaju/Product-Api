const { getDB } = require('../database/sqlite');

// Insert products into the database
const insertProducts = (products, callback) => {
    const db = getDB();
    const stmt = db.prepare('INSERT INTO products (name, price, quantity) VALUES (?, ?, ?)');

    db.serialize(() => {
        products.forEach((product) => {
            stmt.run([product.name, product.price, product.quantity]);
        });
        stmt.finalize(callback);
    });
};

// No need for calculating total in DB now, done directly in controller

module.exports = { insertProducts };
