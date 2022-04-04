const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/home_', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home_.html'));
});

app.get('/product-detail', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/product-detail.html'));
});

app.get('/cart', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/cart.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});