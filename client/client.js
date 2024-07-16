const axios = require('axios');

// Cambia la URL base para apuntar a la URL de Render o localhost si estás en desarrollo
const apiBaseUrl = 'https://hotel-reservation-api-j4y0.onrender.com';

// Datos de la nueva reserva
const reservationData = {
  arrivalDate: "2024-06-16",
  departureDate: "2024-06-20",
  nameHotel: "Hotel Templarios",
  typeRoom: "Double",
  passengers: 2,
  name: "John Doe",
  mail: "john.doe@example.com",
  paymentStatus: "Paid"
};

// Hacer la solicitud POST para crear una nueva reserva
axios.post(`${apiBaseUrl}/reservations`, reservationData)
  .then(response => {
    console.log('Reservation created successfully:', response.data);
  })
  .catch(error => {
    console.error('Error creating reservation:', error);
  });