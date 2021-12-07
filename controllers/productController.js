const productController = {

    parlante: (req, res, next) => {
        res.render('productDetailParlante', {})
      },

    bicicleta: (req, res, next) => {
        res.render('productDetailBicicleta', {})
      },

    micro: (req, res, next) => {
    res.render('productDetailMicro', {})
    },

    reposera: (req, res, next) => {
        res.render('productDetailReposera', {})
        }
}

module.exports = productController;