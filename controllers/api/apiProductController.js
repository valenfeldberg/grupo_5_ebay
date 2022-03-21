let db = require("../../database/models")

const controller = {
	products: (req, res) => {		
		db.Producto.findAll()
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    count: products.length,
                    countByCategory: "no se como hacerlo",
                    url: 'api/products'
                },
                products: products
            }
                res.json(respuesta);
            })
	  },	
      
      category: (req, res) => {		
		db.Categoria.findAll()
        .then(category => {
            let respuesta = {
                meta: {
                    status : 200,
                    count: category.length,                   
                    url: 'api/category'
                },
                category: category
            }
                res.json(respuesta);
            })
	  },		   


}

module.exports = controller;
