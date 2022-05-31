const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const { cookie } = require('express/lib/response');

let usuariosFilePath = path.join(__dirname, '../data/users.json');
let usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

let userControllers = {
    login: (req, res) => {
        res.render("user/login");
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("user/login", {
                errors: errors.mapped()
            });
        } else {
            let email = req.body.email;
            let password = req.body.password;
            let user = usuarios.find(usuario => usuario.email === email);
            if (!user) {
                return res.render("user/login", {
                    errors: { email: { 
                        msg: "El usuario no existe"} 
                    }
                });
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return res.render("user/login", {
                    errors: { password: { 
                        msg: "La contraseña no es correcta"} 
                    }
                });
            }
            if (req.body.remember) {
                res.cookie('user', user.email, { maxAge: 1000 * 60 * 60 * 24 * 7 });
            }
            req.session.isLogged = true;
            req.session.user = user;
            res.redirect("/");
        }
    },
    signup: function (req, res) {
        res.render("./user/signup");
    },
    createUser: function (req, res) {
        let resultValidation = validationResult(req);
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

        if (resultValidation.errors.length > 0) {
            return res.render("user/signup", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            usuarios.push(nuevoUsuario);
            fs.writeFileSync('./data/users.json', JSON.stringify(usuarios, null, 4));
            registroOk = true;
            res.render( "user/login", { nuevoUsuario, registroOk } );
        }
    },
    check: function (req, res) {
        if (req.session.isLogged) {
            res.send("no estás logueado")
        }
        else {
            res.send(req.session.user)
        }
    }

}

module.exports = userControllers