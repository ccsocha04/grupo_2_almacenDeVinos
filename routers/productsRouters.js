var express = require('express');
var router = express.Router();
const productsControllers = require("../controllers/productsControllers.js");


router.get("/", productsControllers.home);

router.get("/product-detail", productsControllers.detalleProducto);

router.get("/cart", productsControllers.cart);

router.get("/create", productsControllers.create);

router.post("/create", productsControllers.createpost);

router.get("/edit", productsControllers.edit);






module.exports = router;