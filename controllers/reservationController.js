const Reservation = require('../models/reservations');

exports.getAllReservations = (_req, res) => {
  const reservations = Reservation.getAll();
  res.json(reservations);
};

exports.getReservationById = (req, res) => {
  const reservation = Reservation.getById(parseInt(req.params.id, 10));
  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404).json({ message: 'Reservation not found' });
  }
};

exports.searchReservations = (req, res) => {
  const { nameHotel, startDate, endDate, typeRoom, paymentStatus, passengers } = req.query;
  let reservations = Reservation.getAll();

  if (nameHotel) {
    reservations = reservations.filter(reservation => reservation.nameHotel.toLowerCase() === nameHotel.toLowerCase());
  }

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    reservations = reservations.filter(reservation => {
      const arrival = new Date(reservation.arrivalDate.split('/').reverse().join('-'));
      const departure = new Date(reservation.departureDate.split('/').reverse().join('-'));
      return (arrival >= start && arrival <= end) || (departure >= start && departure <= end);
    });
  }

  if (typeRoom) {
    reservations = reservations.filter(reservation => reservation.typeRoom.toLowerCase() === typeRoom.toLowerCase());
  }

  if (paymentStatus) {
    reservations = reservations.filter(reservation => reservation.paymentStatus.toLowerCase() === paymentStatus.toLowerCase());
  }

  if (passengers) {
    reservations = reservations.filter(reservation => reservation.passengers === parseInt(passengers, 10));
  }

  res.json(reservations);
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