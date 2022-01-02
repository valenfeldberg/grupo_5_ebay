const fs = require('fs');
const path = require('path');



const productsFilePath = path.join(__dirname, './data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {

    getAll: (req, res ) => {
      const product = products  
      res.render("index", {product:product})
      },

      getAllMisPublicaciones: (req, res ) => {
        const product = products  
        res.render("misPublicaciones", {product:product})
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

        delete: (req, res) => {
          const paramId = parseInt (req.params.id)
          const productIndex = products.findIndex(productElement => productElement.id === paramId)
          products.splice(productIndex, 1)
          res.redirect(`/misPublicaciones`)
          //fs.writeFileSync(productsFilePath, JSON.stringify(products))
         }, 

         edit: (req, res) => {
          
          
          const paramId = parseInt (req.params.id)
          const product = products.find(productElement => productElement.id === paramId)
        
          if (product != null)
          {
            res.render("productEdit", {product})
          }
          else 
          {
        res.status(404).json({msg:"No esta el producto"})
          }
        
        },
          


        update: (req, res) => {
          const productId = parseInt (req.params.id)
          const product = products.find(productElement => productElement.id === productId)
          product.nombre_producto =  req.body.nombre_producto
          product.valor = req.body.valor
          product.ubicacion = req.body.ubicacion
          product.descripcion = req.body.descripcion
          
          //fs.writeFileSync(productsFilePath, JSON.stringify(products))
          res.redirect("/product")
          

        
      },
          
      
      

    

}



module.exports = productController;