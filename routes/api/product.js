var express = require("express");
var router = express.Router();
const productController = require("../../controllers/api/apiProductController");


router.get('/',  productController.products);



module.exports = router;
