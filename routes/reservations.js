const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservations');

// Obtener todas las reservas
router.get('/', (req, res) => {
  const { nameHotel, arrivalDate, departureDate, typeRoom, paymentStatus, passengers } = req.query;
  let reservations = Reservation.getAll();

  if (nameHotel) {
    reservations = reservations.filter(reservation => reservation.nameHotel === nameHotel);
  }

  if (arrivalDate) {
    reservations = reservations.filter(reservation => reservation.arrivalDate === arrivalDate);
  }

  if (departureDate) {
    reservations = reservations.filter(reservation => reservation.departureDate === departureDate);
  }

  if (typeRoom) {
    reservations = reservations.filter(reservation => reservation.typeRoom === typeRoom);
  }

  if (paymentStatus) {
    reservations = reservations.filter(reservation => reservation.paymentStatus === paymentStatus);
  }

  if (passengers) {
    reservations = reservations.filter(reservation => reservation.passengers === parseInt(passengers, 10));
  }

  res.json(reservations);
});

// Obtener una reserva por ID
router.get('/:id', (req, res) => {
  const reservation = Reservation.getById(parseInt(req.params.id));
  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404).json({ message: 'Reservation not found' });
  }
});

// Crear una nueva reserva
router.post('/', (req, res) => {
  const newReservation = Reservation.create(req.body);
  res.status(201).json(newReservation);
});

// Actualizar una reserva existente
router.put('/:id', (req, res) => {
  const updatedReservation = Reservation.update(parseInt(req.params.id), req.body);
  if (updatedReservation) {
    res.json(updatedReservation);
  } else {
    res.status(404).json({ message: 'Reservation not found' });
  }
});

// Eliminar una reserva
router.delete('/:id', (req, res) => {
  const success = Reservation.delete(parseInt(req.params.id));
  if (success) {
    res.json({ message: 'Reservation deleted successfully' });
  } else {
    res.status(404).json({ message: 'Reservation not found' });
  }
});

module.exports = router;