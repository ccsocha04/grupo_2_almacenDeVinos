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
         res.send("crear producto"); 
               },

    edit: (req, res) => {
         let { id } = req.params;
         let editarProducto = products.find(product => product.id == id);
         res.render("./products/product-edit", { producto: editarProducto });
    },

    update: (req, res) => {
     let nom = req.body.nombre;
     res.send(nom);



    },

    destroy: (req, res) => {
          res.send("soy delete");
    }

    
}


module.exports = productsControllers