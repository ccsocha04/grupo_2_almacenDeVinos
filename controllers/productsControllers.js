const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../data/Productos.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let productsControllers = {

     home: function (req, res) {
          res.send("listado de productos");
     },

     detalleProducto: function (req, res) {
          res.render("./products/product-detail");
     },

     cart: function (req, res) {
          res.render("./products/cart");
     },

     create: function (req, res) {
          res.render("./products/create");
     },

     createpost: function (req, res) {


          let error = validationResult(req)

          console.log(error)

          if (error.isEmpty()) {

               let archivoCatalogo = fs.readFileSync('./data/Productos.json', { encoding: 'utf-8' })

               let catalogo = JSON.parse(archivoCatalogo)

               let ultProducto = catalogo.slice(-1)

               let idUltProducto = ultProducto[0].id



               let nuevoProducto = {

                    id: idUltProducto + 1,
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    category: req.body.category,
                    recom: req.body.recom,
                   


               }

               if (req.file){
                    if (req.file.filename){
                         nuevoProducto.image = req.file.filename
                    }
               }



               catalogo.push(nuevoProducto)

               let productoCreado = JSON.stringify(catalogo, null, 4)



               fs.writeFileSync('./data/Productos.json', productoCreado)



               res.redirect("/");
          }

          else {
               res.render("./products/create", { errors: error.array() })
          }


     },

     edit: (req, res) => {

          let { id } = req.params;
          let editarProducto = products.find(product => product.id == id);
          res.render("./products/product-edit", { producto: editarProducto });
     },

     update: (req, res) => {

          let archivoCatalogo = fs.readFileSync('./data/Productos.json', { encoding: 'utf-8' });
          let catalogo = JSON.parse(archivoCatalogo);

          let stringValue = req.body.recom;
          let boolValue = (stringValue == "true"); //returns true or false    

          let productoEditado = {

               id: Number(req.body.id),
               name: req.body.nombre,
               description: req.body.descripcion,
               price: req.body.precio,
               category: req.body.categoria,
              // image: req.file.filename,
               recom: boolValue,
          }

           if (req.file){
               if (req.file.filename){
                    productoEditado.image = req.file.filename;
               }
          };


          let index = catalogo.findIndex(catalogo => catalogo.id === productoEditado.id);

          catalogo[index] = productoEditado;

          console.log(catalogo);

          let producto = JSON.stringify(catalogo, null, 4);

          fs.writeFileSync('./data/Productos.json', producto);

          res.render("./products/product-edit", { producto: productoEditado });

     },

     destroy: (req, res) => {

          let archivoCatalogo = fs.readFileSync('./data/Productos.json', { encoding: 'utf-8' });
          let catalogo = JSON.parse(archivoCatalogo);

          let nuevoCatalogo = catalogo.filter(producto => producto.id != req.params.id);

          catalogo = JSON.stringify(nuevoCatalogo, null, 4);

          fs.writeFileSync('./data/Productos.json', catalogo);

          res.send("producto eliminado");
     }

}

module.exports = productsControllers