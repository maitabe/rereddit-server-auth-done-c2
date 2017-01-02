app.factory('usersService', ['$http', function($http){
   var usersService = {
    posts: [],

    getAll: function() {
      return $http.get('/users').then(function(data) {

        angular.copy(data.data, usersService.users);
      });
    },

  };


  return usersService;

}]);