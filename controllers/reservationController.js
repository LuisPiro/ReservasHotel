const Reservation = require('../models/reservations');

exports.getAllReservations = (req, res) => {
  res.json(Reservation.getAll());
};

exports.getReservationById = (req, res) => {
  const reservation = Reservation.getById(parseInt(req.params.id, 10));
  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404).json({ message: 'Reservation not found' });
  }
};

exports.createReservation = (req, res) => {
  const newReservation = Reservation.create(req.body);
  res.status(201).json({ message: 'Reservation created successfully', reservation: newReservation });
};

exports.updateReservation = (req, res) => {
  const updatedReservation = Reservation.update(parseInt(req.params.id, 10), req.body);
  if (updatedReservation) {
    res.json({ message: 'Reservation updated successfully', reservation: updatedReservation });
  } else {
    res.status(404).json({ message: 'Reservation not found' });
  }
};

exports.deleteReservation = (req, res) => {
  const success = Reservation.delete(parseInt(req.params.id, 10));
  if (success) {
    res.status(204).json({ message: 'Reservation deleted successfully' });
  } else {
    res.status(404).json({ message: 'Reservation not found' });
  }
};