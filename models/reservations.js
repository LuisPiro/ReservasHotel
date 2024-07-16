class Reservation {
  constructor(id, arrivalDate, departureDate, nameHotel, typeRoom, passengers, name, mail, paymentStatus) {
    this.id = id;
    this.arrivalDate = arrivalDate;
    this.departureDate = departureDate;
    this.nameHotel = nameHotel;
    this.typeRoom = typeRoom;
    this.passengers = passengers;
    this.name = name;
    this.mail = mail;
    this.paymentStatus = paymentStatus;
  }

  static getAll() {
    return reservations;
  }

  static getById(id) {
    return reservations.find(reservation => reservation.id === id);
  }

  static create(data) {
    const newReservation = new Reservation(
      reservations.length + 1,
      data.arrivalDate,
      data.departureDate,
      data.nameHotel,
      data.typeRoom,
      data.passengers,
      data.name,
      data.mail,
      data.paymentStatus
    );
    reservations.push(newReservation);
    return newReservation;
  }

  static update(id, data) {
    const reservation = reservations.find(reservation => reservation.id === id);
    if (reservation) {
      Object.assign(reservation, data);
      return reservation;
    }
    return null;
  }

  static delete(id) {
    const index = reservations.findIndex(reservation => reservation.id === id);
    if (index !== -1) {
      reservations.splice(index, 1);
      return true;
    }
    return false;
  }
}

const reservations = [];

// Reserva de ejemplo
const exampleReservation = new Reservation(
  1,
  "2024-06-16",
  "2024-06-20",
  "Hotel Templarios",
  "Double",
  2,
  "John Doe",
  "john.doe@example.com",
  "Paid"
);
reservations.push(exampleReservation);

module.exports = Reservation;