let productsControllers = {
    home: function(req, res){
         res.send("listado de productos");
         },

    detalleProducto: function(req, res){
         res.render("./products/product-detail"); 
         },
     
    cart: function(req, res){
          res.render("./products/cart"); 
     },

    create: function(req, res){
         res.send("crear producto"); 
               },

    edit: function(req, res){
         res.send("editar producto"); 
    },

    
}


module.exports = productsControllers