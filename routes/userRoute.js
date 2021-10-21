const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController');

router
    .route("/login")
    .get(userController.login)
    .post(userController.submitLogin);

router
    .route("/register")
    .get(userController.reg)
    .post(userController.submitReg);

router
    .route("/dashboard")
    .get(userController.dashboard);

module.exports = router;
