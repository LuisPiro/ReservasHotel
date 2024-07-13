const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const userController = require('../controllers/userController');

// Rutas para reservas
router.get('/reservations', reservationController.getAllReservations);
router.post('/reservations', reservationController.createReservation);
router.get('/reservations/:id', reservationController.getReservationById);
router.put('/reservations/:id', reservationController.updateReservation);
router.delete('/reservations/:id', reservationController.deleteReservation);

// Rutas para usuarios
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;