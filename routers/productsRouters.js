var express = require('express');
var router = express.Router();

let path = require ("path")

const productsControllers = require("../controllers/productsControllers.js");

const multer = require ("multer")

let multerDiskStorage = multer.diskStorage({

    destination: (req, file, callback) => {
        let folder = path.join(__dirname, "../public/img");

        callback(null, folder);
    },

    filename: (req, file, callback) => {
        let imageName = Date.now() + path.extname(file.originalname);
        callback (null, imageName)
    }
})

let fileUpload = multer ({ storage: multerDiskStorage});




router.get("/", productsControllers.home);

router.get("/product-detail", productsControllers.detalleProducto);

router.get("/cart", productsControllers.cart);

router.get("/create", productsControllers.create);

router.post("/create", fileUpload.single("image"), productsControllers.createpost);

router.get("/edit", productsControllers.edit);






module.exports = router;