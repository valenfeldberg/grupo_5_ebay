function authtMiddleware(req, res, next){
    if (!req.session.userLogged) {
        console.log("pase por aca")
        return res.redirect("/login")
        
    }
    next()
    }
    
    module.exports = authtMiddleware