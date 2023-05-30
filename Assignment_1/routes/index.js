const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, '../views'));
// app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index.ejs');
});

app.get('/aboutme', (req, res, next) => {
  res.render('aboutme.ejs');
});

app.get('/project', (req, res, next) => {
  res.render('project.ejs');
});

app.get('/service', (req, res, next) => {
  res.render('service.ejs');
});

app.get('/contact', (req, res, next) => {
  res.render('contact.ejs');
});

app.listen(8080);
