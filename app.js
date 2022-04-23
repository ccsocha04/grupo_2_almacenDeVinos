const express = require('express');
const path = require('path');

const app = express();

app.set("view engine", "ejs");

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

const mainRouters = require("./routers/mainRouters");

/* app.use((req, res, next) => {
  res.status(404).render("/not-found")
});  */

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.use('/', mainRouters);

app.use('/home', mainRouters);

app.use('/home_', mainRouters);

app.use('/product-detail', mainRouters);

app.use('/login', mainRouters);

app.use('/signup', mainRouters);

app.use('/carts', mainRouters);
