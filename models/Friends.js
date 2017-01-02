var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
  name: String

});



var Friend = mongoose.model('Post', PostSchema);

module.exports = Friend;