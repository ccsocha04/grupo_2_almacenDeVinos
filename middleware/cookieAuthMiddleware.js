const fs = require('fs');
const path = require('path');

function cookieAuthMiddleware(req, res, next) {
    next();
    if (req.cookies.user != undefined && req.session.user == undefined) {
        let usuariosFilePath = path.join(__dirname, '../data/users.json');
        let usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
        let user = usuarios.find(usuario => usuario.email === req.cookies.user);
        if (user) {
            const userLogin = user;
            req.session.isLogged = true;
            req.session.user = userLogin;
        }
       
    }

}

module.exports = cookieAuthMiddleware;