var app = angular.module('STI-User-Developer-Test', []);

app.controller('MainController', ['$http','$scope', function($http, $scope) {
  $scope.card = [];
  $scope.otherTitle = '';
  
  // Get client data from JSON file
  $http({
    method: 'GET',
    url: 'assets/json/JaneDoe.json'
  }).then(function(response) {
    $scope.card = response.data;
    $scope.card.title = 'Overview';
    $scope.otherTitle = 'Details';
    $scope.card.showOverview = true;
  });
  
  $scope.toggleInfo = function() {
    if ($scope.card.title == 'Overview') {
      $scope.card.title = 'Details';
      $scope.otherTitle = 'Overview';
    } else {
      $scope.card.title = 'Overview';
      $scope.otherTitle = 'Details';
    }
  };
}]);
