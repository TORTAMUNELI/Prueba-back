const express = require('express');
const { createEmpleado } = require('../controllers/empleado');
const { check } = require('express-validator');


const router = express.Router();

router.post('/', createEmpleado);

module.exports = router;