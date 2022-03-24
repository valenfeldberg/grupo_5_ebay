const { sequelize } = require("../../database/models");
let db = require("../../database/models");

const controller = {
  products: (req, res) => {
    db.Producto.findAll().then((products) => {
      db.Producto.findAll({
        group: ["categoria_id"],
        attributes: [
          "categoria_id",
          [sequelize.fn("COUNT", "categoria_id"), "categoryConunt"],
        ],
        raw: true
      }).then((countByCategories) => {

        const countByCategory = {}
        for (const category of countByCategories) {
            countByCategory[category.categoria_id]= category.categoryConunt            
        }

        const nuevoArreglo = []
        for (const product of products) {
            nuevoArreglo.push({
               
                detail: "http://localhost:4000/api/users/" + product.id
            })
        }

        let respuesta = {
          meta: {
            status: 200,
            count: products.length,
            countByCategory,
            url: "api/products",
          },
          products: products,
        };
        res.json(respuesta);
      });
    });
  },

  category: (req, res) => {
    db.Categoria.findAll().then((category) => {
      let respuesta = {
        meta: {
          status: 200,
          count: category.length,
          url: "api/category",
        },
        category: category,
      };
      res.json(respuesta);
    });
  },
};

module.exports = controller;
