# Reservas de Hotel

Este proyecto es una API para la gestión de reservas de hotel, construida con Node.js, Express y otras tecnologías relacionadas.

## Requisitos

- Node.js (>=14.0.0)
- npm (>=6.0.0)

## Instalación

```bash

1. Clona este repositorio:

git clone https://github.com/LuisPiro/ReservasHotel.git
cd ReservasHotel

2. Instala las dependencias.

npm install

3. Crea un archivo .env con lo siguiente:

PORT=3000
URL_BASE=/api

4. Inicia el servidor.

npm start

El servidor estará disponible en http://localhost:3000

```

## Endpoints

Puedes acceder a la documentación de la API en http://localhost:3000/api-docs.

## Despliegue en Render

Este proyecto está configurado para ser desplegado en Render. Asegúrate de configurar las variables de entorno adecuadas y sigue las instrucciones de Render para el despliegue.

# Uso del Cliente

El archivo client.js contiene un ejemplo de cómo consumir la API usando axios.

```javaScript

//client.js

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

// Asegurate de ajustar las URL y las configuraciones según sea necesario para tu entorno específico.

## Contribución

Si deseas contribuir a este proyecto, por favor crea un fork del repositorio y envía un pull request con tus cambios.

## Licencia

Este proyecto está licenciado bajo la licencia MIT.