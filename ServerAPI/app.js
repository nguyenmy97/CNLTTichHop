var createError = require('http-errors');
var express = require('express');
var path = require('path');
var pg = require('pg');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


var sbj = require('./Models/function/Subject');
var user_ = require('./Models/function/users');

app.get('/', (req, res, next) => {

    sbj.getAllSubject((err, rows) => {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});

app.get('/allUser', (req, res, next) => {

    user_.getAllUser((err, rows) => {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;