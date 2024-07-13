const express = require('express');
const dotenv = require('dotenv');
const routes = require('../ReservasHotel/routes/routes');

// Configurar dotenv para cargar las variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const urlBase = process.env.URL_BASE || '/api';

// Middleware para JSON
app.use(express.json());

// Configurar las rutas
app.use(urlBase, routes);

// Iniciar el servidor
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
