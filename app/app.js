var app = angular.module('feedback', ['ngMaterial', 'ngRoute', 'ngRateIt']);

app.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/feedback.html',
      controller: 'feedbackCtrl'
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
    .warnPalette('red')
}]);
