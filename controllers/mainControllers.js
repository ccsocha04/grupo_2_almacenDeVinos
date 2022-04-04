const path = require("path");

let mainControllers = {
    home: function(req, res){
         res.render("home");    
},
    home_: function(req, res){
         res.render("home_");
},
    detalleProducto: function(req, res){
        res.render("product-detail"); // practica
    },
    login: function(req, res){
        res.render("login");
},
    cart: function(req, res){
    res.render("cart");
}
}

module.exports = mainControllers