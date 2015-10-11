var app = angular.module('feedback');

app.controller('loginCtrl', ['$rootScope', '$scope', '$mdToast', '$http', function($rootScope, $scope, $mdToast, $http) {

  if ($rootScope.loggedin === true) {
    location.hash = '/admin';
    $mdToast.show(
      $mdToast.simple().content('Du bist bereits eingeloggt.')
    );
  }

  $scope.login = function() {
    $http.post('api/v1/login.php', $scope.creds).then(function() {
      $rootScope.loggedin = true;
      location.hash = '/admin';
      $mdToast.show(
        $mdToast.simple().content('Herzlich willkommen.')
      );
    }, function(response) {
      if (response.status === 400) {
        $mdToast.show(
          $mdToast.simple().content('Ungültige Anmeldedaten.')
        );
      } else {
        $mdToast.show(
          $mdToast.simple().content('Es ist ein unbekannter Fehler aufgetreten. Bitte später erneut versuchen.')
        );
      }
    });
  };

}]);
