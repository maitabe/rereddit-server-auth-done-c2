app.factory('usersService', ['$http', function($http){
   var usersService = {
    users: [],

  getAll: function() {
      console.log('entered usersService');
      return $http.get('/users').then(function(data) {
    console.log('This is our userService data: '+data);
        angular.copy(data.data, usersService.users);
      });
   }

  };

     return usersService;
}]);