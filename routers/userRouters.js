var express = require('express');
const path = require("path")
const multer = require("multer")

var router = express.Router();

// Controlador de usuarios
const userControllers = require("../controllers/userControllers.js");
const guestMiddleware = require('../middleware/guestMiddleware.js')
const authMiddleware = require('../middleware/authMiddleware.js')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img'));
    },

    filename: (req, file, cb) => {
        let imageName = Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
});

const fileUpload = multer({ storage });

const { body } = require("express-validator");

let validation = [
    body("firstName").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("lastName").notEmpty().withMessage("Tienes que escribir un apellido"),
    body("email").notEmpty().withMessage("Tienes que escribir un email").bail()
    .isEmail().withMessage("Debes escribir un formato de email valido"),
    body("password").notEmpty().withMessage("Tienes que escribir una contraseña").bail().isStrongPassword().withMessage("La contraseña no es segura, debe tener minimo 8 caracteres, una letra mayuscula, una letra minuscula, un numero y un simbolo"),
];

let loginValidation = [
    body("email").isEmail().withMessage("Debes escribir un formato de email valido"),
    body('password').isLength({ min: 8 }).withMessage("La contraseña no tiene la estructura, debe tener minimo 8 caracteres, una letra mayuscula, una letra minuscula, un numero y un simbolo")
];

router.get("/login", userControllers.login);
router.post("/login", loginValidation, userControllers.processLogin);
router.get("/signup", guestMiddleware, userControllers.signup);
router.post("/signup", fileUpload.single("image"), validation, userControllers.createUser);
router.get("/detail/:id", authMiddleware, userControllers.userDetail);



module.exports = router;