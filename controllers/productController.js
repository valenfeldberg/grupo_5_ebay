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
        res.render("productCreate")
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
        const product = req.body
        console.log (req.body)
        res.send("hola")
    }
}



module.exports = productController;