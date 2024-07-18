const axios = require('./index');

const apiBaseUrl = 'https://hotel-reservation-api-y0u2.onrender.com/';

// Hacer la solicitud GET para obtener todas las reservas
axios.get(`${apiBaseUrl}api/reservations`)
  .then(response => {
    console.log('All Reservations:', response.data);
  })
  .catch(error => {
    console.error('Error fetching reservations:', error);
  });