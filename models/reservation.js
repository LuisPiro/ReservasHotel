class Reservation {
    constructor() {
      this.reservations = [
        {
          id: 1,
          arrivalDate: "2024-06-16",
          departureDate: "2024-06-20",
          nameHotel: "Hotel Templarios",
          typeRoom: "Double",
          passengers: 2,
          name: "John Doe",
          mail: "john.doe@example.com",
          paymentStatus: "Paid"
        }
      ];
    }
  
    getAllReservations() {
      return this.reservations;
    }
  
    createReservation(reservation) {
      this.reservations.push(reservation);
      return reservation;
    }
  
    getReservationById(id) {
      return this.reservations.find(r => r.id === id);
    }
  
    updateReservation(id, updatedReservation) {
      const index = this.reservations.findIndex(r => r.id === id);
      if (index !== -1) {
        this.reservations[index] = { ...this.reservations[index], ...updatedReservation };
        return this.reservations[index];
      }
      return null;
    }
  
    deleteReservation(id) {
      const index = this.reservations.findIndex(r => r.id === id);
      if (index !== -1) {
        return this.reservations.splice(index, 1)[0];
      }
      return null;
    }
  }
  
  module.exports = Reservation;