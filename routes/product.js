var express = require("express");
var router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");

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

router.get("/", productController.getAll);
router.get("/product", productController.getAll);
router.get("/login", productController.login);
router.get("/logged", productController.logged);
router.get("/carrito", productController.carrito);
router.get("/register", productController.register);
router.get("/productCreate", productController.create);
router.get("/product/:id", productController.getOne);
router.post("/productCreate", upload.single("imagen"), productController.save);
router.get("/misPublicaciones", productController.getAllMisPublicaciones);
router.delete("/product/:id", productController.delete);

// Formulario de edición de productos (GET)
router.get("/product/:id/productEdit", productController.edit);

// Acción de edición (a donde se envía el formulario) (PUT)
router.put("/product/:id", productController.update);

module.exports = router;
