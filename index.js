const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/routes');

// Configurar dotenv para cargar las variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const urlBase = process.env.URL_BASE || '/api';

// Configurar opciones de CORS
const corsOptions = {
  origin: 'localhost:4000', // Reemplaza con el dominio que deseas permitir
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
};

// Configurar CORS con opciones
app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Configurar las rutas
app.use(urlBase, routes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});