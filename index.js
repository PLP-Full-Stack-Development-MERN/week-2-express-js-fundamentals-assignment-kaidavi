require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

// Middleware to parse JSON bodies
app.use(express.json());

// Apply the logger middleware globally
app.use(logger);

// Mount the routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).json({ message: "Something went wrong!" });
});

// Start the server
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});