var express = require('express');
var router = express.Router();
const index2Controller = require('../controllers/index2Controller');

/* GET home page. */
router.get('/index2', index2Controller.index);

module.exports = router;
