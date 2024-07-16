const User = require('../models/user');

exports.getAllUsers = (req, res) => {
  res.json(User.getAll());
};

exports.getUsersById = (req, res) => {
  const user = User.getById(parseInt(req.params.id, 10));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

exports.createUser = (req, res) => {
  const newUser = User.create(req.body);
  res.status(201).json({ message: 'User created successfully', User: newUser });
};

exports.updateUser= (req, res) => {
  const updatedUser = User.update(parseInt(req.params.id, 10), req.body);
  if (updatedUser) {
    res.json({ message: 'User updated successfully', User: updatedUser });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

exports.deleteUser = (req, res) => {
  const success = User.delete(parseInt(req.params.id, 10));
  if (success) {
    res.status(204).json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};