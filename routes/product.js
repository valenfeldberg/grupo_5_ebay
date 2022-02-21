var express = require("express");
var router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")
const { body } = require('express-validator');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
/* GET home page. */


const validations = [
	body('nombre_producto').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('valor').notEmpty().withMessage('Tienes que escribir un valor'),
//	body('email')
//		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
//		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('ubicacion').notEmpty().withMessage('Tienes que escribir una ubicacion'),
	body('descripcion').notEmpty().withMessage('Tienes que elegir una descripcion'),
	body('imagen').custom((value, { req }) => {
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

router.post("/",  productController.filtro);
router.get("/", productController.getAll);
router.get("/product", productController.getAll);

//router.get("/logged", productController.logged);
//router.get("/carrito", productController.carrito);

router.get("/productCreate", authMiddleware,  productController.create);

router.get("/product/:id", productController.getOne);
router.post("/productCreate", upload.single("imagen"), validations, productController.save);
router.get("/misPublicaciones", authMiddleware,  productController.getAllMisPublicaciones);
router.delete("/product/:id", productController.delete);

// Formulario de edición de productos (GET)
router.get("/product/:id/productEdit", productController.edit);

// Acción de edición (a donde se envía el formulario) (PUT)
router.put("/product/:id", productController.update);



module.exports = router;
