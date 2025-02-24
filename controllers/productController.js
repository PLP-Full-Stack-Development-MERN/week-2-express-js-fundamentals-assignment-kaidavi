// controllers/productController.js

// Mock data for products
let products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 499.99 },
  ];
  
  // Get all products (with optional query string for filtering by name)
  const getAllProducts = (req, res) => {
    const { name } = req.query;
    if (name) {
      const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.json(filteredProducts);
    }
    res.json(products);
  };
  
  // Get a single product by ID
  const getProductById = (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  };
  
  // Create a new product
  const createProduct = (req, res) => {
    const newProduct = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  };
  
  // Update an existing product by ID
  const updateProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    res.json(product);
  };
  
  // Delete a product by ID
  const deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === productId);
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found" });
    }
    products.splice(productIndex, 1);
    res.status(204).send(); // No content to send back
  };
  
  module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };