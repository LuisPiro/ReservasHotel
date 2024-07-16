const express = require('express');
const router = express.Router();
const reservationRoutes = require('./reservations');

router.use('/reservations', reservationRoutes);

module.exports = router;