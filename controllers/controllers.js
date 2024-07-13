const reservationModel = require('../models/reservation');

// Controlador para obtener todas las reservas
const getAllReservations = (req, res) => {
  const reservations = reservationModel.getAllReservations();
  res.json(reservations);
};

// Controlador para crear una nueva reserva
const createReservation = (req, res) => {
  const newReservation = {
    id: reservationModel.getAllReservations().length + 1,
    name: req.body.name,
    checkIn: req.body.checkIn,
    checkOut: req.body.checkOut
  };
  const createdReservation = reservationModel.createReservation(newReservation);
  res.status(201).json(createdReservation);
};

// Controlador para obtener una reserva por su ID
const getReservationById = (req, res) => {
  const reservation = reservationModel.getReservationById(parseInt(req.params.id));
  if (!reservation) {
    return res.status(404).json({ message: 'Reservation not found' });
  }
  res.json(reservation);
};

// Controlador para actualizar una reserva por su ID
const updateReservation = (req, res) => {
  const updatedReservation = {
    name: req.body.name,
    checkIn: req.body.checkIn,
    checkOut: req.body.checkOut
  };
  const reservation = reservationModel.updateReservation(parseInt(req.params.id), updatedReservation);
  if (!reservation) {
    return res.status(404).json({ message: 'Reservation not found' });
  }
  res.json(reservation);
};

// Controlador para eliminar una reserva por su ID
const deleteReservation = (req, res) => {
  const reservation = reservationModel.deleteReservation(parseInt(req.params.id));
  if (!reservation) {
    return res.status(404).json({ message: 'Reservation not found' });
  }
  res.status(204).send();
};

module.exports = {
  getAllReservations,
  createReservation,
  getReservationById,
  updateReservation,
  deleteReservation,
};