
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define the path to the SQLite database file
const dbPath = path.resolve(__dirname, './products.db');

// Connect to the SQLite database stored in a file
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err.message);
        process.exit(1); // Exit if there is a connection error
    } else {
        console.log('Connected to SQLite database:', dbPath);
    }
});

// Function to initialize the products table if it doesn't exist
const initializeDB = () => {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                price REAL NOT NULL,
                quantity INTEGER NOT NULL
            )
        `, (err) => {
            if (err) {
                console.error('Error creating products table:', err.message);
                process.exit(1); // Exit if there is an error creating the table
            } else {
                console.log('Products table created or already exists.');
            }
        });
    });
};

// Function to get the database instance
const getDB = () => db;

// Export the initialization and database access functions
module.exports = { initializeDB, getDB };
