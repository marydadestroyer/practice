var http = require('http');
var path = require('path');
//const express = require("express");
var bodyParser = require("body-parser");
const nodeFetch = require( 'node fetch');

const express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'htmls'));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));



app.get('/', function(req, res){
    let url = 'http://xkcd.com/info.0.json';
    let img;
    nodeFetch(url)
        .then(resp =>resp.json())
        .then(data => {
            img = data.img;
            res.render('index',{img:img});
        })
        .catch(err => {
            console.log(err);
            res.render('index');
        })
    
});




http.createServer(app).listen(port, function(){

});