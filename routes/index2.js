const express = require('express');
const router = express.Router();
const index2Controller = require('../controllers/index2Controller');

router.get('/', index2Controller.index2);
module.exports = router;
