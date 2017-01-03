var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');
var auth = jwt({secret: 'myLittleSecret'});

var User = require('../models/Users');

//get all the users from the DB
router.get('/', auth, function(req, res, next){
  var currentUserId = req.query.id;
  console.log(currentUserId);
  User.find({"_id": { $nin: currentUserId}}, function (err, users) {
      if (users) {

      }

      res.send(users);
  });
});

module.exports = router;

