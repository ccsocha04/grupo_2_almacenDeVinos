var express = require('express');
var router = express.Router();
const userControllers = require("../controllers/userControllers.js");


router.get("/", userControllers.login);

router.get("/signup", userControllers.signup);




module.exports = router;