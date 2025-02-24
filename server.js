const express = require('express');
const logger = require('./middleware/logger'); // Import logger middleware
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(logger); // Apply logger middleware globally

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
