function adminMiddleware(req, res, next) {

    req.session.user


    if (req.session.user != undefined && req.session.user.admin == true ) {
        next()
    } else {
        res.redirect("/user/login")
    }
}

module.exports = adminMiddleware;