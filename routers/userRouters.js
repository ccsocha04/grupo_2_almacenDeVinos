var express = require('express');
var router = express.Router();
const userControllers = require("../controllers/userControllers.js");
const guestMiddleware = require('../middleware/guestMiddleware.js')

router.get("/", userControllers.login);

router.get("/signup", guestMiddleware, userControllers.signup);

router.get("/check-user", userControllers.check);



module.exports = router;