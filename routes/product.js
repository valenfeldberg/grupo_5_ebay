var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* GET home page. */

router.get('/', productController.getAll);
router.get('/product', productController.getAll);
router.get('/login', productController.login);
router.get('/logged', productController.logged);
router.get('/carrito', productController.carrito);
router.get('/register', productController.register);
router.get('/productCreate', productController.create);
router.get('/product/:id', productController.getOne);
router.post('/productCreate', productController.save);




module.exports = router;
