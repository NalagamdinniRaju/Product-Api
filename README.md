Here's the `README.md` file for your project:

---

# Product Value API (Node.js/Express/SQLite)

## Overview

This project is a simple API built with **Node.js**, **Express**, and **SQLite** that allows you to add a list of product objects (each containing a name, price, and quantity) and calculates the total value of all products in the list. The total value is calculated by multiplying the price of each product by its quantity and summing up the results.

## Features

- **Add products**: Add a list of products to the database.
- **Calculate total value**: Automatically calculates the total value of the products based on their price and quantity.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast and minimalistic web framework for Node.js.
- **SQLite**: Lightweight, serverless relational database.
- **JavaScript (ES6)**: Scripting language for the API logic.

## API Endpoints

### 1. Add Products and Get Total Value

- **Endpoint**: `/api/products/add`
- **Method**: `POST`
- **Description**: This endpoint accepts a list of products and calculates the total value (price * quantity) of all products.

#### Request Example

```json
[
  {
    "name": "Product 1",
    "price": 10.5,
    "quantity": 3
  },
  {
    "name": "Product 2",
    "price": 5.0,
    "quantity": 10
  }
]
```

#### Response Example

```json
{
  "totalValue": 81.5
}
```

## Installation and Setup

### Prerequisites

Before you begin, ensure you have **Node.js** installed on your machine. You can check if it's installed by running:

```bash
node -v
```

### Step-by-Step Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NalagamdinniRaju/Product-Api.git
   cd product-api
   ```

2. **Install dependencies:**

   Inside the project folder, install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Start the server:**

   Run the following command to start the server:

   ```bash
   node index.js
   ```

   The server will be running at `http://localhost:5000`.

4. **Test the API:**

   You can test the API using Postman, Insomnia, or **curl**. For example, using **curl**:

   ```bash
   curl -X POST http://localhost:3000/api/products/add \
   -H 'Content-Type: application/json' \
   -d '[
         {"name": "Product 1", "price": 10.5, "quantity": 3},
         {"name": "Product 2", "price": 5.0, "quantity": 10}
       ]'
   ```

   This will return the total value of all products in the list.


## How It Works

1. **Request**: The client sends a `POST` request to `/api/products/add` with a list of products in the request body.
2. **Processing**: The server:
   - Stores the products in an SQLite database.
   - Calculates the total value by summing up the product of price and quantity for each item.
3. **Response**: The server sends back the total value of the products in JSON format.

## Example Usage
Here's an example request and response in Postman:


![alt text](/public/image.png)

---
