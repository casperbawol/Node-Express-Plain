//require
var express = require('express');
var path = require('path');


// create router
var router = express.Router();

// export router
module.exports = router;


// route for home
router.get('/', function(req,res){
    res.render('pages/home')
})

