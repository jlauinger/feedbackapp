var app = angular.module('feedback');

app.controller('adminCtrl', ['$rootScope', '$scope', '$mdToast', '$http', function($rootScope, $scope, $mdToast, $http) {

  if ($rootScope.loggedin !== true) {
    location.hash = '/login';
    $mdToast.show(
      $mdToast.simple().content('Bitte zunächst einloggen.')
    );
  }

  $scope.logout = function() {
    $http.delete('api/v1/login.php').then(function() {
      $rootScope.loggedin = false;
      location.hash = '/login';
      $mdToast.show(
        $mdToast.simple().content('Auf wiedersehen.')
      );
    });
  };

}]);
