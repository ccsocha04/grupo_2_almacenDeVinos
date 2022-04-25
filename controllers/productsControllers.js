const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/Productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));







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

<<<<<<< HEAD
         let nuevoProducto = {

          
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category: req.body.category,
          recom: req.body.recom

         }

=======
>>>>>>> 8680dfb51d90bd6fdae09ffe191ac4cf3558823f

     
         let archivoCatalogo = fs.readFileSync('./data/Productos.json', {encoding: 'utf-8'})
         let catalogo = JSON.parse(archivoCatalogo)

<<<<<<< HEAD
=======
         let ultProducto = catalogo.slice(-1)

         let idUltProducto = ultProducto[0].id

     

         let nuevoProducto = {

          id: idUltProducto+1,
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category: req.body.category,
          recom: req.body.recom,
          image: req.file.filename


         }

      
         
>>>>>>> 8680dfb51d90bd6fdae09ffe191ac4cf3558823f
         catalogo.push(nuevoProducto)
         
         let productoCreado = JSON.stringify(catalogo)

<<<<<<< HEAD
         fs.writeFileSync('./data/Productos.json', productoCreado )

         res.redirect("/");     
=======

         
         fs.writeFileSync('./data/Productos.json', productoCreado )



         res.redirect("/");
         
>>>>>>> 8680dfb51d90bd6fdae09ffe191ac4cf3558823f
         
    },

    edit: (req, res) => {

         let { id } = req.params;
         let editarProducto = products.find(product => product.id == id);
         res.render("./products/product-edit", { producto: editarProducto });
    },

    update: (req, res) => {

//   productoEditado[id] = req.body.id;
     productoEditado[id] = req.body.nombre;
     productoEditado[id] = req.body.description;
     productoEditado[id] = req.body.price;
     productoEditado[id] = req.body.category;
     productoEditado[id] = req.body.image;
     productoEditado[id] = req.body.recom;


    },

    destroy: (req, res) => {
          res.send("soy delete");
    }

}


module.exports = productsControllers