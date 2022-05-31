function authMiddleware(req, res, next) {
    if (req.session.user != undefined) {
        next()
    } else {
        res.send("Lo siento, está página no es para invitados")
    }
}

module.exports = authMiddleware;