const express = require('express');
const router = express.Router();
const crewController = require('../controllers/crewController');

router  
    .route('/allCrew')
    .get(crewController.allCrew);

router
    .route('/createCrew')
    .get(crewController.crewForm)
    .post(crewController.createCrew);

module.exports = router;