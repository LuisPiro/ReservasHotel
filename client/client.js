const axios = require('axios');

// Cambia la URL base para apuntar a la URL de Render o localhost si estás en desarrollo
const apiBaseUrl = 'https://reservashotel-nul0.onrender.com';

// Hacer la solicitud GET para obtener todas las reservas
axios.get(`${apiBaseUrl}/api/reservations`)
  .then(response => {
    console.log('All Reservations:', response.data);
  })
  .catch(error => {
    console.error('Error fetching reservations:', error);
  });
