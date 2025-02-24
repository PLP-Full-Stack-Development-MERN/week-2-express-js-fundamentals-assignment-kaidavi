// controllers/userController.js

// Mock data for users
let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];
  
  // Get all users
  const getAllUsers = (req, res) => {
    res.json(users);
  };
  
  // Get a single user by ID
  const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  };
  
  // Create a new user
  const createUser = (req, res) => {
    const newUser = {
      id: users.length + 1,
      name: req.body.name,
      email: req.body.email,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  // Update an existing user by ID
  const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json(user);
  };
  
  // Delete a user by ID
  const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }
    users.splice(userIndex, 1);
    res.status(204).send(); // No content to send back
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };