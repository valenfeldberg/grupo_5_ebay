let db = require("../database/models");
const Op = db.Sequelize.Op;
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const productsFilePath = path.join(__dirname, "./data/productos.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productController = {
  getAll: (req, res) => {
    db.Producto.findAll().then(function (products) {
      return res.render("index", { product: products });
    });
  },

  filtro: (req, res) => {
    const palabaBusqueda = req.body.buscar.toLowerCase();
    db.Producto.findAll({
      where: {
        nombre_producto: { [Op.like]: "%" + palabaBusqueda + "%" },
      },
    }).then(function (products) {
      return res.render("index", { product: products });
    });
  },

  getAllMisPublicaciones: (req, res) => {
    const userLogged = req.session.userLogged.email;
    db.Usuario.findAll({
      where: {
        email: userLogged,
      },
    }).then(function (user) {
      const usuarioEnUso = user[0].id;

      db.Producto.findAll({
        where: {
          user_id: { [Op.like]: "%" + usuarioEnUso + "%" },
        },
      }).then(function (products) {
        return res.render("misPublicaciones", { product: products });
      });
    });

    //  const articulosDelUsuario = products.filter(elements => elements.usuario == userLogged);
    //  res.render("misPublicaciones", { product: articulosDelUsuario });
  },


  chart: (req, res) => {
    const userLogged = req.session.userLogged.email;
    db.Usuario.findAll({
      where: {
        email: userLogged,
      },
    }).then(function (user) {
      const usuarioEnUso = user[0].id;

      db.Producto.findAll({
        where: {
          carro_user: { [Op.like]: "%" + usuarioEnUso + "%" },
        },
      }).then(function (products) {
        return res.render("chart", { product: products });
      });
    });

    //  const articulosDelUsuario = products.filter(elements => elements.usuario == userLogged);
    //  res.render("misPublicaciones", { product: articulosDelUsuario });
  },

  /* register: (req, res) => {
    const product = products;
    res.render("register", {});
  },*/

  create: (req, res) => {
    db.Categoria.findAll().then(function (categorias) {
      return res.render("productCreate", { categorias: categorias });
    });
  },

  getOne: (req, res) => {
    const paramId = parseInt(req.params.id);
    db.Producto.findByPk(paramId).then(function (product) {
      res.render("productDetail", { product: product });
    });
  },

  getOneChart: (req, res) => {
    const paramId = parseInt(req.params.id);
    db.Producto.findByPk(paramId).then(function (product) {
      res.render("productChartDetail", { product: product });
    });
  },

  save: (req, res) => {
    const resultValidation = validationResult(req);
    console.log(resultValidation);
    if (resultValidation.errors.length > 0) {
      console.log("pase por el MAL VALIDACIONES");
      return res.render("productCreate", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else {
      console.log("pase por el OK");
      console.log(req.body);
      const userLogged = req.session.userLogged.email;
      console.log(userLogged);
      db.Usuario.findAll({
        where: {
          email: userLogged,
        },
      }).then(function (user) {
        var usuarioActivo = user[0].id;

        db.Categoria.findAll({
          where: {
            categoria: req.body.categoria,
          },
        }).then(function (categoria) {
          var categoriaElegida = categoria[0].id;
          console.log(categoriaElegida);

          db.Producto.create({
            nombre_producto: req.body.nombre_producto,
            valor: req.body.valor,
            ubicacion: req.body.ubicacion,
            usado: req.body.usado,
            imagen: "/images/" + req.file.filename,
            imagen1: "/images/" + req.file.filename,
            imagen2: "/images/" + req.file.filename,
            imagen3: "/images/" + req.file.filename,
            imagen4: "/images/" + req.file.filename,
            descripcion: req.body.descripcion,
            user_id: usuarioActivo,
            categoria_id: categoriaElegida,
          });
        });
      });
    }

    res.redirect("/product");
    // const imagen = req.file.filename
    /*const { nombre_producto, valor, ubicacion, usado } = req.body;
    const newProduct = {};
    newProduct.id = products[products.length - 1].id + 1;
    newProduct.nombre_producto = nombre_producto;
    newProduct.valor = valor;
    newProduct.ubicacion = ubicacion;
    newProduct.usado = usado;
    newProduct.imagen = "/images/" + req.file.filename;
    console.log(newProduct.id);
    newProduct.usuario = req.session.userLogged.email
    //newProduct.imagen = imagen

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.redirect("/product");*/
  },

  delete: (req, res) => {
    db.Producto.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect(`/misPublicaciones`);

    /* const paramId = parseInt(req.params.id);
    const productIndex = products.findIndex(
      (productElement) => productElement.id === paramId
    );
    products.splice(productIndex, 1);
    res.redirect(`/misPublicaciones`);
    //fs.writeFileSync(productsFilePath, JSON.stringify(products))*/
  },

  edit: (req, res) => {
    const paramId = parseInt(req.params.id);
    db.Producto.findByPk(paramId).then(function (product) {
      res.render("productEdit", { product: product });
    });
  },

  update: (req, res) => {
    db.Producto.update(
      {
        nombre_producto: req.body.nombre_producto,
        valor: req.body.valor,
        ubicacion: req.body.ubicacion,
        usado: req.body.usado,
        //imagen : "/images/" + req.file.filename,
        descripcion: req.body.descripcion,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.redirect("/product/" + req.params.id);
    /*const productId = parseInt(req.params.id);
    const product = products.find(
      (productElement) => productElement.id === productId
    );
    product.nombre_producto = req.body.nombre_producto;
    product.valor = req.body.valor;
    product.ubicacion = req.body.ubicacion;
    product.descripcion = req.body.descripcion;

    //fs.writeFileSync(productsFilePath, JSON.stringify(products))
    res.redirect("/product");*/
  },

  carro: (req, res) => {

    const userLogged = req.session.userLogged.email;
    console.log("<<<<<<<<<<<<<<<<<<Entre al carro>>>>>>>>>>>>>>>>>")
    db.Usuario.findAll({
      where: {
        email: userLogged,
      },
    }).then(function (user) {
      var usuarioActivo = user[0].id;
      console.log("usuarioActivo")
      console.log(usuarioActivo)
      console.log(req.params.id)
      db.Producto.update(
        {
          carro_user: usuarioActivo,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
    });
    res.redirect("/chart");
  },

  sacarDelCarro: (req, res) => {

    const userLogged = req.session.userLogged.email;
    console.log("<<<<<<<<<<<<<<<<<<Entre al carro>>>>>>>>>>>>>>>>>")
    db.Usuario.findAll({
      where: {
        email: userLogged,
      },
    }).then(function (user) {
      var usuarioActivo = user[0].id;
      console.log("usuarioActivo")
      console.log(usuarioActivo)
      console.log(req.params.id)
      db.Producto.update(
        {
          carro_user: null,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
    });
    res.redirect("/chart");
  },

};

module.exports = productController;
