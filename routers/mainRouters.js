var express = require('express');
var router = express.Router();
const mainControllers = require("../controllers/mainControllers.js");


router.get("/", mainControllers.home);

router.get("/home", mainControllers.home);

router.get("/prueba-session", function(req, res){

    if (req.session.contador == undefined){
       req.session.contador = 0
    }
    req.session.contador++;
   
       res.send("es" +req.session.contador)
   });
   
   
   





module.exports = router;