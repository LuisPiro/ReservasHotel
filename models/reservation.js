class Reservation {
    constructor() {
      this.reservations = [];
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