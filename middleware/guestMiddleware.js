function guestMiddleware(req, res, next) {
    if (req.session.user == undefined) {
        next()
    } else {
        res.send("Lo siento, está página es para invitados")
    }
}

module.exports = guestMiddleware;