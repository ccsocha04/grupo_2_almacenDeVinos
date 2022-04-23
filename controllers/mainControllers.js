let mainControllers = {
    home: function(req, res){
         res.render("home");    
},
    home_: function(req, res){
         res.render("home_");
},
    crud: function(req, res){
        res.render("./products/crud");
}
}

module.exports = mainControllers