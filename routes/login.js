var express = require("express");
var router = express.Router();
const loginController = require("../controllers/loginController");
const multer = require("multer");
const path = require("path");
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")

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
	body('first_name').isLength({ min: 2 }).withMessage('Tiene que tener minimo 2 caracteres'),
	body('last_name').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('last_name').isLength({ min: 2 }).withMessage('Tiene que tener minimo 2 caracteres'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('password').isLength({ min: 8 }).withMessage('Tiene que tener minimo 8 caracteres'),
	body('country').notEmpty().withMessage('Tienes que elegir un país'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
		
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

const validationslogin = [	
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('password').isLength({ min: 8 }).withMessage('Tiene que tener minimo 8 caracteres'),	
]

// Formulario de registro
router.get('/users',  loginController.users);

// Formulario de registro
router.get('/register', guestMiddleware, loginController.register);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, loginController.processRegister);


// Formulario de login
router.get('/login', guestMiddleware, loginController.login);

// Procesar el login
router.post('/login', validationslogin, loginController.processLogin);

// Perfil de Usuario
router.get('/userDetail', authMiddleware, loginController.profile);

// Perfil de Usuario
router.get('/logout', loginController.logout);

// Borrar Perfil de Usuario
router.delete("/userDetail/:id", loginController.delete);

module.exports = router;
