const express = require('express');
const path = require('path');

const app = express();

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set("view engine", "ejs");

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

const mainRouters = require("./routers/mainRouters");

/* app.use((req, res, next) => {
  res.status(404).render("/not-found")
});  */
const productsRouters = require("./routers/productsRouters");

const userRouters = require("./routers/userRouters");

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.use (express.urlencoded ({extended: false}));

app.use (express.json());

app.use('/', mainRouters);

app.use('/home', mainRouters);

app.use('/home_', mainRouters);

app.use('/user', userRouters);

app.use('/products', productsRouters);






