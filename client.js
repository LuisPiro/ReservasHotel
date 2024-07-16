const axios = require('./index');
const cors = require('./index');

app.use(cors({
  origin: 'http://localhost:3000', // Permitir solo desde localhost:3000
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir metodos utilizados en el proyecto
  allowedHeaders: ['Content-Type'], // Permitir solo el header Content-Type
}));

const apiBaseUrl = 'https://reservashotel-nul0.onrender.com/';

// Hacer la solicitud GET para obtener todas las reservas
axios.get(`${apiBaseUrl}api/reservations`)
  .then(response => {
    console.log('All Reservations:', response.data);
  })
  .catch(error => {
    console.error('Error fetching reservations:', error);
  });