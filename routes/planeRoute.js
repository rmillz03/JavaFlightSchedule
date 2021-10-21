const express = require('express');
const router = express.Router();
const planeController = require('../controllers/planeController');

router  
    .route('/allPlanes')
    .get(planeController.allPlanes);

router
    .route('/createPlane')
    .get(planeController.planeForm)
    .post(planeController.createPlane);

module.exports = router;