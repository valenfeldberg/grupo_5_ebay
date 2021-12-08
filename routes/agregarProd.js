const express = require('express');
const router = express.Router();
const agregarProdController = require('../controllers/addController');


router.get('/', agregarProdController.agregarProd);

module.exports = router;