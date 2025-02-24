// routes/productRoutes.js
const express = require("express");
const router = express.Router();

// Mock data for products
let products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 499.99 },
];

// GET all products (with optional query string for filtering by name)
router.get("/", (req, res) => {
  const { name } = req.query;
  if (name) {
    const filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filteredProducts);
  }
  res.json(products);
});

// GET a single product by ID
router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// POST a new product
router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT (update) an existing product by ID
router.put("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;
  res.json(product);
});

// DELETE a product by ID
router.delete("/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products.splice(productIndex, 1);
  res.status(204).send(); // No content to send back
});

module.exports = router;