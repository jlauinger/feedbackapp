var app = angular.module('feedback');

app.controller('feedbackCtrl', ['$scope', '$mdToast', '$http', function($scope, $mdToast, $http) {

  $scope.send = function() {
    $http.post('api/v1/feedback.php', $scope.feedback).then(function(){
      $mdToast.show(
        $mdToast.simple().content('Feedback wurde gespeichert, danke! Feedback was saved, thank you!')
      );
      $scope.feedback = {};
    }, function(){
      $mdToast.show(
        $mdToast.simple().content('Feedback konnte nicht gespeichert werden, bitte später erneut versuchen. Error saving feedback, please try again later.')
      );
    });
  }

}]);
