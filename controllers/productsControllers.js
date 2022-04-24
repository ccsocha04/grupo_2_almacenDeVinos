let fs = require ("fs");

let path = require ("path")




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
          res.render("./products/create"); 
     },

    createpost: function(req, res){

         let nuevoProducto = {

          
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category: req.body.category,
          recom: req.body.recom


         }

         

         let archivoCatalogo = fs.readFileSync('./data/Productos.json', {encoding: 'utf-8'})

         let catalogo = JSON.parse(archivoCatalogo)

         

         catalogo.push(nuevoProducto)
         
         let productoCreado = JSON.stringify(catalogo)


         

         fs.writeFileSync('./data/Productos.json', productoCreado )





         res.redirect("crear producto");
         
         
    },

    edit: function(req, res){
         res.send("editar producto"); 
    },

    
}


module.exports = productsControllers