var express = require('express');
var router = express.Router();
const mainControllers = require("../controllers/mainControllers.js");


router.get("/", mainControllers.home);

router.get("/home", mainControllers.home);





module.exports = router;