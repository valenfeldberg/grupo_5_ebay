const indexController = {
    index: (req, res, next) => {
        res.render('index', {});
      }
}

module.exports = indexController;