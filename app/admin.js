var app = angular.module('feedback');

app.controller('adminCtrl', ['$rootScope', '$scope', '$mdToast', '$http', function($rootScope, $scope, $mdToast, $http) {

  if ($rootScope.loggedin !== true) {
    location.hash = '/login';
    $mdToast.show(
      $mdToast.simple().content('Bitte zunächst einloggen.')
    );
  }

  $http.get('api/v1/feedback.php').then(function(response) {
    $scope.feedback = response.data;
  }, function() {
    $mdToast.show(
      $mdToast.simple().content('Feedbackergebnisse konnten nicht geladen werden, bitte später erneut versuchen.')
    );
  });

  $scope.logout = function() {
    $http.delete('api/v1/login.php').then(function() {
      $rootScope.loggedin = false;
      location.hash = '/login';
      $mdToast.show(
        $mdToast.simple().content('Auf wiedersehen.')
      );
    });
  };

  Array.prototype.avg = function(prop) {
    var total = 0, values = 0;
    for (var i = 0, _len = this.length; i < _len; i++) {
      if (+this[i][prop] !== -1) {
        values++;
        total += +this[i][prop];
      }
    }
    if (values > 0) {
      return (total / values).toFixed(2);
    } else {
      return 'n/a';
    }
  };

}]);
