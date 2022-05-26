const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cookieAuthMiddleware = require('./middleware/cookieAuthMiddleware');

// Crear servidor express
const app = express();

// Configuración sesión
app.use(session({secret:"secret"}))
app.use(cookieParser());
app.use(cookieAuthMiddleware);

// Configuración de métodos de peticiones
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










