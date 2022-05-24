const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../data/Productos.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let mainControllers = {
    home: function (req, res) {
        let recomendados = products.filter(productos => productos.recom == true);
        res.render("home", {
            recomendados: recomendados
        });
    },
}


module.exports = mainControllers