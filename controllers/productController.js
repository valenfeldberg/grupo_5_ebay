const fs = require('fs');
const path = require('path');



const productsFilePath = path.join(__dirname, './data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {

    getAll: (req, res ) => {
      const product = products  
      res.render("index", {product:product})
      },

    login: (req, res ) => {
      const product = products  
      res.render("login", {})
      },

    logged: (req, res ) => {
      const product = products  
      res.render("logged", {product:product})
      },

    carrito: (req, res ) => {
      const product = products  
      res.render("carrito", {product:product})
      },

    register: (req, res ) => {
      const product = products  
      res.render("register", {})
      },

      create: (req, res) => {
        res.render("productCreate", {})
      },

      getOne: (req, res ) => {
        const paramId = parseInt (req.params.id)
        const product = products.find(productElement => productElement.id === paramId)
      
        if (product != null)
        {
          res.render("productDetail", {product})
        }
        else 
        {
      res.status(404).json({msg:"No esta el producto"})
        }
      },
  
        save: (req, res) => {
         // const imagen = req.file.filename
          const {nombre_producto, valor, ubicacion, usado } = req.body
          const newProduct = {}
          newProduct.id = products[products.length -1].id +1
          newProduct.nombre_producto = nombre_producto
          newProduct.valor = valor
          newProduct.ubicacion = ubicacion
          newProduct.usado = usado

          console.log(newProduct.id)
          //newProduct.imagen = imagen

          products.push(newProduct)
          fs.writeFileSync(productsFilePath, JSON.stringify(products))
          res.redirect("/product")
        }, 

      /*save: (req, res) => {
        const {nombre_producto, valor, ubicacion, usado, imagen} = req.body
        const productId = products[products.length -1].id +1
        const product = {
          id: productId,
          nombre_producto,
          valor,
          ubicacion,
          usado,
          imagen
        }*/
    

        //products.push(products)
        //console.log (req.body)
        //console.log(productId)
        //res.redirect("/product")
       // res.send(201).json(products)
    //}
   
    //save: function(req, res) {
           //res.send(req.body)
   // }
}



module.exports = productController;