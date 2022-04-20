var express = require('express');
var router = express.Router();
const mainControllers = require("../controllers/mainControllers.js");


router.get("/", mainControllers.home);

router.get("/home", mainControllers.home);

router.get("/home_", mainControllers.home_);

router.get("/crud", mainControllers.crud);


module.exports = router;