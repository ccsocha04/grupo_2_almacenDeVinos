var express = require('express');
var router = express.Router();
const productsControllers = require("../controllers/productsControllers.js");


router.get("/", productsControllers.home);

router.get("/product-detail", productsControllers.detalleProducto);

router.get("/cart", productsControllers.cart);

router.get("/create", productsControllers.create);

/*** EDIT ONE PRODUCT ***/ 
router.get("/edit/:id", productsControllers.edit);
router.patch("/edit/:id", productsControllers.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsControllers.destroy);


module.exports = router;