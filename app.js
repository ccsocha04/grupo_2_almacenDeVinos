const express = require('express');
const path = require('path');

const app = express();

app.set("view engine", "ejs");

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

const mainRouters = require("./routers/mainRouters");

<<<<<<< HEAD
/* app.use((req, res, next) => {
  res.status(404).render("/not-found")
});  */
=======
const productsRouters = require("./routers/productsRouters");

const userRouters = require("./routers/userRouters");
>>>>>>> 0c43ede55d192452d98ddcad32f0304f07bf8d7d

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.use('/', mainRouters);

app.use('/home', mainRouters);

app.use('/home_', mainRouters);

app.use('/user', userRouters);

app.use('/products', productsRouters);






