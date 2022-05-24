function authMiddleware (req, res, next) {

    if (req.session.usuarioLogueado != undefined){
        next()}
        else {
            res.render("./user/login")
        }

}

module.exports = authMiddleware