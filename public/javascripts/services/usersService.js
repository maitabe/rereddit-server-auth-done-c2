app.factory('usersService', ['$http', 'auth', function($http, auth){
   var usersService = {
    users: [],

    getAll: function() {
    	console.log('entered getall in usersService');
      return $http.get('/users?id=' + auth.currentUser()._id).then(function(data) {

        angular.copy(data.data, usersService.users);

        console.log('entered the get all ', data.data);
        console.log('entered the get all ', usersService.users);
      });
    },

  };

  console.log(usersService.users);
  return usersService;

}]);