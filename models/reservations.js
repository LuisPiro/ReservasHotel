class Reservation {
  constructor(id, arrivalDate, departureDate, nameHotel, typeRoom, passengers, name, mail, paymentStatus) {
    this.id = id;
    this.arrivalDate = this.formatDate(arrivalDate);
    this.departureDate = this.formatDate(departureDate);
    this.nameHotel = nameHotel;
    this.typeRoom = typeRoom;
    this.passengers = passengers;
    this.name = name;
    this.mail = mail;
    this.paymentStatus = paymentStatus;
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  static getAll() {
    return reservations.map(reservation => new Reservation(
      reservation.id,
      reservation.arrivalDate,
      reservation.departureDate,
      reservation.nameHotel,
      reservation.typeRoom,
      reservation.passengers,
      reservation.name,
      reservation.mail,
      reservation.paymentStatus
    ));
  }

  static getById(id) {
    const reservation = reservations.find(reservation => reservation.id === id);
    return reservation ? new Reservation(
      reservation.id,
      reservation.arrivalDate,
      reservation.departureDate,
      reservation.nameHotel,
      reservation.typeRoom,
      reservation.passengers,
      reservation.name,
      reservation.mail,
      reservation.paymentStatus
    ) : null;
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
      Object.assign(reservation, {
        ...data,
        arrivalDate: this.prototype.formatDate(data.arrivalDate),
        departureDate: this.prototype.formatDate(data.departureDate),
      });
      return new Reservation(
        reservation.id,
        reservation.arrivalDate,
        reservation.departureDate,
        reservation.nameHotel,
        reservation.typeRoom,
        reservation.passengers,
        reservation.name,
        reservation.mail,
        reservation.paymentStatus
      );
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