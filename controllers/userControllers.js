let userControllers = {
    
    login: function(req, res){
        res.render("./user/login");
    },
    signup: function(req, res){
        res.render("./user/signup");
    },

    check: function (req, res){

        if (req.session.usuarioLogueado == undefined){
        res.send("no estás logueado");}
        else {
            res.send("el usuario logueado es" + req.session.usuarioLogueado.email)
        }
    }
}

module.exports = userControllers