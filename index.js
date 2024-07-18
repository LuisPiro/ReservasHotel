const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const routes = require('./routes/routes');

// Configurar dotenv para cargar las variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 10000;
const urlBase = process.env.URL_BASE || '/api';

// Configurar CORS
app.use(cors({
  origin: 'https://hotel-reservation-api-y0u2.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));


// Middleware
app.use(express.json());
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Ups! Algo salió mal');
});

// Configurar Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Configurar las rutas
app.use(urlBase, routes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = axios;