'use strict';

const authController = require('../controllers/authController');
const express = require('express');
const router = express.Router();

const authRoutes = router.post('/login', authController.login);

module.exports = authRoutes;