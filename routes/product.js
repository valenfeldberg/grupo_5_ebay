var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', productController.getAll);
router.get('/login', productController.login);
router.get('/logged', productController.logged);
router.get('/carrito', productController.carrito);
router.get('/register', productController.register);
router.get('/create', productController.create);
router.get('/:id', productController.getOne);
router.post("/", productController.save ) 




module.exports = router;
