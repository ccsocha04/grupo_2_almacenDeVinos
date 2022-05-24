var express = require('express');
var router = express.Router();

// Controlador principal
const mainControllers = require("../controllers/mainControllers.js");


router.get("/", (req, res) => {
   res.redirect('/home');
});
router.get("/home", mainControllers.home);


module.exports = router;