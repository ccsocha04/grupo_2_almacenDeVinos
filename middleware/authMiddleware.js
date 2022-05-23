function authMiddleware (req, res, next) {

    if (req.session.usuarioLogueado != undefined){
        next()}
        else {
            res.send("Lo siento, está página es de usuarios")
        }

}

module.export = authMiddleware