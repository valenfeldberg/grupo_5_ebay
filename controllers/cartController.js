const cartController = {
    cart: (req, res, next) => {
        res.render('productCart', {})
      }
}

module.exports = cartController;