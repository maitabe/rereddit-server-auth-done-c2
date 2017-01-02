var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var jwt = require('express-jwt');
var auth = jwt({secret: 'myLittleSecret'});

var User = require('../models/Users');

//get all the users from the DB
router.get('/', auth, function(req, res, next){
  User.find(function(err, users) {
    if(err){return next(err);}

    res.json(users);
  });
});

module.exports = router;

