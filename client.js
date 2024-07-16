const axios = require('axios');

const apiBaseUrl = 'https://reservashotel-nul0.onrender.com/';

// Hacer la solicitud GET para obtener todas las reservas
axios.get(`${apiBaseUrl}api/reservations`)
  .then(response => {
    console.log('All Reservations:', response.data);
  })
  .catch(error => {
    console.error('Error fetching reservations:', error);
  });