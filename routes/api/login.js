var express = require("express");
var router = express.Router();
const loginController = require("../../controllers/api/apiLoginController");


router.get('/',  loginController.users);
router.get('/:id',  loginController.profile);



module.exports = router;
