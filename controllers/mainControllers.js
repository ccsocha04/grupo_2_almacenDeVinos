let mainControllers = {
    home: function(req, res){
         res.render("home");    
},
    home_: function(req, res){
         res.render("home_");
},
    detalleProducto: function(req, res){
        res.render("./products/product-detail"); // practica
    },
    login: function(req, res){
        res.render("./user/login");
},
    cart: function(req, res){
    res.render("./products/cart");
}
}

module.exports = mainControllers