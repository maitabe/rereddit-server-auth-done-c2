app.factory('usersService', ['$http', 'auth', function($http, auth){
   var usersService = {
    users: [],

    getAll: function() {
    	console.log('entered getall in usersService');
      return $http.get('/users?id=' + auth.currentUser()._id).then(function(data) {
      	console.log('entered the get all ' + data);
        angular.copy(data.data, usersService.users);
      });
    },

  };


  return usersService;

}]);