const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/routes');

// Configurar dotenv para cargar las variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const urlBase = process.env.URL_BASE || '/api';

// Middleware para parsear JSON
app.use(express.json());

// Configurar las rutas
app.use(urlBase, routes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});