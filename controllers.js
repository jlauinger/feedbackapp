var app = angular.module('feedback');

app.controller('feedbackCtrl', ['$scope', '$mdToast', function($scope, $mdToast) {

  $scope.send = function() {
    console.log($scope.feedback);
  }

}]);
