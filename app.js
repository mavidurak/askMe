/*
  Uygulama için gerekli moduller
*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');

var configs = require('./configs');

mongoose.connect(configs.db);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

/*
  uygulama url yönlendirmeleir
*/
var routes = require('./routes/index');
var users = require('./routes/users');

// express uygulaması
var app = express();

// template motoru konfigrasyonu
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uygulama konfgirasyonları
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// url lerin route'lara yönlendirilmesis
app.use('/', routes);
app.use('/users', users);

// 404 hatası hazırlanması
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// uygulama ayağa kalktığında localhost:90 üzeirnden yayında olacak
app.listen(100);

// uygulamanın export edilmesi
module.exports = app;
