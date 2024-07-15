const User = require('../models/User');
const userModel = new User();

// Controlador para obtener todos los usuarios
const getAllUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.json(users);
};

// Controlador para crear un nuevo usuario
const createUser = (req, res) => {
  const newUser = {
    id: userModel.getAllUsers().length + 1,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  const createdUser = userModel.createUser(newUser);
  res.status(201).json({
    message: 'User created successfully',
    user: createdUser
  });
};

// Controlador para obtener un usuario por su ID
const getUserById = (req, res) => {
  const user = userModel.getUserById(parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

// Controlador para actualizar un usuario por su ID
const updateUser = (req, res) => {
  const updatedUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  const user = userModel.updateUser(parseInt(req.params.id), updatedUser);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({
    message: 'User updated successfully',
    user
  });
};

// Controlador para eliminar un usuario por su ID
const deleteUser = (req, res) => {
  const user = userModel.deleteUser(parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(204).json({ message: 'User deleted successfully' });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};