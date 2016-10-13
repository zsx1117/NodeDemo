/**
 * Created by zsx11 on 2016/9/28.
 */
var express  = require('express');
var app      = express();
var mongoose = require('mongoose'); //mangoDB
var morgan   = require('morgan');//log
var bodyParser = require('body-parser');//html post
var port       = process.env.PORT || 8080;
var dataBase = require('./config/database');
var methodOverride = require('method-override');
mongoose.connect(dataBase.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extend':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

//routes
require('./app/routes.js');

app.listen(port);
console.log("App listening on port"+ port);