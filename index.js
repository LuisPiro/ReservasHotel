const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const routes = require('./routes/routes');

// Configurar dotenv para cargar las variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const urlBase = process.env.URL_BASE || '/api';

// Configurar CORS
app.use(cors({
  origin: 'https://localhost:3000', // Permitir solo desde localhost:3000
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permitir solo métodos GET y POST
  allowedHeaders: ['Content-Type'], // Permitir solo el header Content-Type
}));


// Middleware
app.use(express.json());

// Configurar Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Configurar las rutas
app.use(urlBase, routes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
