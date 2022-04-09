var express = require('express');
var router = express.Router();
const mainControllers = require("../controllers/mainControllers.js");


router.get("/", mainControllers.home);

router.get("/home", mainControllers.home);

router.get("/home_", mainControllers.home_);

router.get("/product-detail", mainControllers.detalleProducto);

router.get("/login", mainControllers.login);

router.get("/signup", mainControllers.signup);

router.get("/cart", mainControllers.cart);


module.exports = router;