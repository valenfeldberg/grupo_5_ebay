const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/', productController.bicicleta);


module.exports = router;