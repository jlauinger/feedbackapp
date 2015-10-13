var app = angular.module('feedback', ['ngMaterial', 'ngRoute', 'ngRateIt']);

app.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/feedback.html',
      controller: 'feedbackCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .when('/admin', {
      templateUrl: 'partials/admin.html',
      controller: 'adminCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $mdThemingProvider
    .theme('default')
    .primaryPalette('amber')
    .accentPalette('pink')
    .warnPalette('red');
}]);

app.run(['$rootScope', '$http', function($rootScope, $http) {
  $http.get('api/v1/login.php').then(function(response) {
    $rootScope.loggedin = response.data.loggedin;
  }, function() {
    $rootScope.loggedin = false;
  });
}]);
