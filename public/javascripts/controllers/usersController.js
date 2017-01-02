app.controller('UsersCtrl', ['$scope', '$state', 'usersService', function($scope, $state, usersService) {
	$scope.users = usersService.users;

}]);

