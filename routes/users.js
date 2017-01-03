var express = require('express');
var router = express.Router();

// var jwt = require('express-jwt');
// var auth = jwt({secret: 'myLittleSecret'});

var User = require('../models/Users');

//get all the users from the DB
router.get('/', function(req, res, next){
  var currentUserId = req.query.id;
  User.find({'_id': { $nin: currentUserId }}, function (err, users) {
      if (users) {

      }

      res.send(users);
  });
  // User.find(currentUserId, function(err, users) {
  //   if(err){return next(err);}
  //
  //     // for(var i = 0; i < users.length; i++) {}
  //         //todo: exclude me from list
  //         // if(currentUserId === users[i].id) {
  //         //
  //         // }
  //
  //
  //
  //
  // // response
  //   res.json(users);
  // });
});

module.exports = router;

