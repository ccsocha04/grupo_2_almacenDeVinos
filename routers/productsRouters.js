const express = require('express');
const router = express.Router();
const multer = require ("multer")
const path = require ("path")
const productsControllers = require("../controllers/productsControllers.js");



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




router.get("/", productsControllers.home);

router.get("/product-detail", productsControllers.detalleProducto);

router.get("/cart", productsControllers.cart);

router.get("/create", productsControllers.create);

/*** EDIT ONE PRODUCT ***/ 
router.get("/edit/:id", productsControllers.edit);
router.patch("/edit/:id", fileUpload.single("image"), productsControllers.update);
router.post("/create", productsControllers.createpost);
router.post("/create", fileUpload.single("image"), productsControllers.createpost);

router.get("/edit", productsControllers.edit);

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsControllers.destroy);


module.exports = router;