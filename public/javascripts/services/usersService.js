app.factory('usersService', ['$http', function($http){
   var usersService = {
    users: [],

    getAll: function() {
    	console.log('entered getall in usersService');
      return $http.get('/users').then(function(data) {
      	console.log('entered the get all ' + data);
        angular.copy(data.data, usersService.users);
      });
    },

  };


  return usersService;

}]);