var express = require('express');
var ejs = require('ejs');
var fetch = require('node-fetch');

var app = express();
var port = process.env.PORT || 3000;
app.set('view engine','ejs');
app.use(express.static(_dirname +'/public'));

