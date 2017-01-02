var app = angular.module('redditFun', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/templates/home.html',
    controller: 'MainCtrl',
    resolve: {
      postPromise: ['posts', function(posts){
        return posts.getAll();
      }]
    }
  })
  .state('post', {
    url: '/posts/:id',
    templateUrl: '/templates/posts.html',
    controller: 'PostsCtrl',
    resolve: {
      post: ['$stateParams', 'posts', function($stateParams, posts) {
        return posts.get($stateParams.id);
      }]
    }
  })
  .state('login', {
    url: '/login',
    templateUrl: '/templates/login.html',
    controller: 'AuthCtrl',
    onEnter: ['$state', 'auth', function($state, auth){
      if(auth.isLoggedIn()){
        $state.go('home');
      }
    }]
  })
  .state('users', {
    url: '/users',
    templateUrl: '/templates/users.html',
    controller: 'UsersCtrl',
    resolve: {
      user: ['usersService', function(usersService){
        console.log('entered resolve');
        return usersService.getAll();
      }]
    }
  })
  .state('register', {
    url: '/register',
    templateUrl: '/templates/register.html',
    controller: 'AuthCtrl',
    onEnter: ['$state', 'auth', '$timeout', function($state, auth, $timeout){
      if(auth.isLoggedIn()){
        $timeout(function(){
          $state.go('home');
        }, 100);
      }
    }]
  });

  $urlRouterProvider.otherwise('home');
}]);