const axios = require('axios');

const apiBaseUrl = 'https://reservashotel-nul0.onrender.com/api';

// Hacer la solicitud GET para obtener todas las reservas
axios.get(`${apiBaseUrl}/reservations`)
  .then(response => {
    console.log('All Reservations:', response.data);
  })
  .catch(error => {
    console.error('Error fetching reservations:', error);
  });
