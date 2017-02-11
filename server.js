// require
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');



app.listen(port,function(){
    console.log('Hello world!');
})


// use ejs and express layouts
app.set('view engine', 'ejs')
app.use(expressLayouts);

// use bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// route app
var router = require('./app/routes.js')
app.use('/', router);

// static files
app.use(express.static(__dirname + '/public'))






