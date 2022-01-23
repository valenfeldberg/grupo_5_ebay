var express = require("express");
var router = express.Router();
const loginController = require("../controllers/loginController");
const multer = require("multer");
const path = require("path");

const { body } = require('express-validator');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/avatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });



const validations = [
	body('first_name').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('last_name').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('country').notEmpty().withMessage('Tienes que elegir un país'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]

// Formulario de registro
router.get('/users', loginController.users);

// Formulario de registro
router.get('/register', loginController.register);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, loginController.processRegister);


// Formulario de login
router.get('/login', loginController.login);

// Procesar el login
router.post('/login', validations, loginController.processLogin);


// Perfil de Usuario
router.get('/userDetail/:id', loginController.profile);

// Borrar Perfil de Usuario
router.delete("/userDetail/:id", loginController.delete);

module.exports = router;
