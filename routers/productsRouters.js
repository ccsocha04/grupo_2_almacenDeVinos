const express = require('express');
const router = express.Router();
const multer = require ("multer")
const path = require ("path")
const productsControllers = require("../controllers/productsControllers.js");
const guestMiddleware = require('../middleware/guestMiddleware.js')
const authMiddleware = require('../middleware/authMiddleware.js')
const adminMiddleware = require('../middleware/adminMiddleware.js')



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img'));
    },

    filename: (req, file, cb) => {
        let imageName = Date.now() + path.extname(file.originalname);
        cb (null, imageName);
    }
});

const fileUpload = multer ({ storage });

const {body} = require("express-validator")

const checkError = [body("name").notEmpty().withMessage("el nombre, genio")]





router.get("/", productsControllers.home);

router.get("/product-detail/:id", productsControllers.detalleProducto);

router.get("/cart", productsControllers.cart);

router.get("/create", adminMiddleware, productsControllers.create);

router.post("/create",fileUpload.single("image"), checkError, productsControllers.createpost);


/*** EDIT ONE PRODUCT ***/ 
router.get("/edit/:id", adminMiddleware, productsControllers.edit);
router.patch("/edit/:id", fileUpload.single("image"), productsControllers.update);



router.get("/edit", productsControllers.edit);

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsControllers.destroy);


module.exports = router;