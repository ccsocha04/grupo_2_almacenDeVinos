const express = require('express');
const path = require('path');
const session = require('express-session')

// Crear servidor express
const app = express();

// Configuracuón de métodos de peticiones
app.use (session({secret:"secret"}))

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Configuración motor de plantillas
app.set("view engine", "ejs");

// Configuración archivos
app.use (express.urlencoded ({extended: false}));
app.use (express.json());

// Configuración de recursos estáticos
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// Configuración de rutas
const mainRouters = require("./routers/mainRouters");
const productsRouters = require("./routers/productsRouters");
const userRouters = require("./routers/userRouters");

app.use('/', mainRouters);
app.use('/home', mainRouters);
app.use('/user', userRouters);
app.use('/products', productsRouters);

/* app.use((req, res, next) => {
  res.status(404).render("/not-found")
});  */

// Configuración puerto de escucha
app.listen(3000, () => {
  console.log('Server started on port 3000');
});










