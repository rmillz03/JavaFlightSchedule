const express = require('express')
const router = express.Router()
const flightController = require('../controllers/flightController');

router
    .route('/allFlights')
    .get(flightController.allFlights);

router 
    .route('/createFlight')
    .get(flightController.flightForm)
    .post(flightController.createFlight);

module.exports = router;