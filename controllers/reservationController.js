const Reservation = require('../models/Reservation');
const reservationModel = new Reservation();

// Controlador para obtener todas las reservas
const getAllReservations = (req, res) => {
  const reservations = reservationModel.getAllReservations();
  res.json(reservations);
};

// Controlador para crear una nueva reserva
const createReservation = (req, res) => {
  const newReservation = {
    id: reservationModel.getAllReservations().length + 1,
    arrivalDate: req.body.arrivalDate,
    departureDate: req.body.departureDate,
    nameHotel: req.body.nameHotel,
    typeRoom: req.body.typeRoom,
    passengers: req.body.passengers,
    name: req.body.name,
    mail: req.body.mail,
    paymentStatus: req.body.paymentStatus
  };
  const createdReservation = reservationModel.createReservation(newReservation);
  res.status(201).json({
    message: 'Reservation created successfully',
    reservation: createdReservation
  });
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
    arrivalDate: req.body.arrivalDate,
    departureDate: req.body.departureDate,
    nameHotel: req.body.nameHotel,
    typeRoom: req.body.typeRoom,
    passengers: req.body.passengers,
    name: req.body.name,
    mail: req.body.mail,
    paymentStatus: req.body.paymentStatus
  };
  const reservation = reservationModel.updateReservation(parseInt(req.params.id), updatedReservation);
  if (!reservation) {
    return res.status(404).json({ message: 'Reservation not found' });
  }
  res.json({
    message: 'Reservation updated successfully',
    reservation
  });
};

// Controlador para eliminar una reserva por su ID
const deleteReservation = (req, res) => {
  const reservation = reservationModel.deleteReservation(parseInt(req.params.id));
  if (!reservation) {
    return res.status(404).json({ message: 'Reservation not found' });
  }
  res.status(204).json({ message: 'Reservation deleted successfully' });
};

module.exports = {
  getAllReservations,
  createReservation,
  getReservationById,
  updateReservation,
  deleteReservation,
};