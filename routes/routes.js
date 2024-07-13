const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

// Ruta para obtener todas las reservas
router.get('/reservations', controllers.getAllReservations);

// Ruta para crear una nueva reserva
router.post('/reservations', controllers.createReservation);

// Ruta para obtener una reserva por su ID
router.get('/reservations/:id', controllers.getReservationById);

// Ruta para actualizar una reserva por su ID
router.put('/reservations/:id', controllers.updateReservation);

// Ruta para eliminar una reserva por su ID
router.delete('/reservations/:id', controllers.deleteReservation);

module.exports = router;