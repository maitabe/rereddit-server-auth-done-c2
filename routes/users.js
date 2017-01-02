var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../models/Users');

// getAll for all users
router.get('/', function(req, res, next){
  console.log('entered server');
  User.find(function(err, users){
    if(err){ return next(err); }

    res.json(users);
    console.log('These are our users ' + users);
  });
});

module.exports = router;
