var express = require('express');
var bodyParser = require('body-parser');

// Mongoose import
var mongoose = require('mongoose');

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://127.0.0.1:27017/test', function (error) {
    if (error) {
        console.log(error);
    }
});

// create instance of express
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// URLS management
require('./api/user-api.js')(app);

// Start the server
app.listen(8060);
