const axios = require('axios');

const apiBaseUrl = 'https://api.render.com/deploy/srv-cqatsq08fa8c73at9dt0?key=O2C4cLiLwdA/';

// Hacer la solicitud GET para obtener todas las reservas
axios.get(`${apiBaseUrl}api/reservations`)
  .then(response => {
    console.log('All Reservations:', response.data);
  })
  .catch(error => {
    console.error('Error fetching reservations:', error);
  });