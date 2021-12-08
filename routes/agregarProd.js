const express = require('express');
const router = express.Router();
const agregarController = require('../controllers/agregarController');

router.get('/', agregarController.agregar);
module.exports = router;