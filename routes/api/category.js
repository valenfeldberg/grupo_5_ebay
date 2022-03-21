var express = require("express");
var router = express.Router();
const productController = require("../../controllers/api/apiProductController");

router.get('/',  productController.category);




module.exports = router;
