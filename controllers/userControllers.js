const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');


let userControllers = {

    login: function (req, res) {
        res.render("./user/login");
    },

    signup: function (req, res) {
        res.render("./user/signup");
    },

    createUser: function (req, res) {

        let usuariosJson = fs.readFileSync('./data/users.json', { encoding: 'utf-8' });
        let usuarios = JSON.parse(usuariosJson);

        let idNuevoUsuario = usuarios[usuarios.length - 1].id + 1;

        let nuevoUsuario = {

            id: idNuevoUsuario,
            image: "userImgDefault.png",
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        if (req.file) {
            if (req.file.filename) {
                nuevoUsuario.image = req.file.filename;
            }
        }

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("user/signup", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {

            usuarios.push(nuevoUsuario);

            fs.writeFileSync('./data/users.json', JSON.stringify(usuarios, null, 4));

            res.render("user/login");

        }
    },


    check: function (req, res){

        if (req.session.usuarioLogueado == undefined){
        res.send("no estás logueado")}
        else {
            res.send("el usuario logueado es" + req.session.usuarioLogueado.email)
        }
    }
    
}

module.exports = userControllers