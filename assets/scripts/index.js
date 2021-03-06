var app = angular.module('STI-User-Developer-Test', []);

app.controller('MainController', ['$scope', function($scope) {
  /** 
   * Jane Doe card information.
   * This information would normally be received from a database, but for the sake of this test
   * I've just made it a JSON object.
   */
  $scope.card = {
    "firstName": "Jane",
    "lastName": "Doe",
    "gender": "female",
    "occupation": "Retired",
    "age": "70",
    "location": "Toronto, Ontario",
    "medications": [
      {
        "name": "CRESTOR"
      }
    ],
    "image": "janedoe.jpg",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam massa, consequat in dui sed, aliquam placerat nibh. Fusce in ultrices lectus, convallis tincidunt elit. Curabitur faucibus sem vitae ex egestas iaculis. Suspendisse eget tempor nulla. Cras et convallis urna, sed aliquam metus. Pellentesque consequat finibus turpis quis semper. Curabitur bibendum sem ut massa tincidunt, at dictum mi convallis. Duis et ipsum at leo pulvinar laoreet sit amet id ligula. Pellentesque in libero convallis augue condimentum aliquet eu a elit. Sed eu diam rhoncus, ullamcorper dui nec, pellentesque massa. Curabitur vestibulum volutpat euismod. Aliquam leo neque, laoreet quis tellus non, ultrices posuere metus.",
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc quis ipsum semper, ac vehicula odio rhoncus. Praesent dictum erat mauris, eget sollicitudin odio malesuada euismod. Aliquam ut ligula ante. Fusce metus metus, consequat eget condimentum et, gravida ut lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Sed lacinia, lacus efficitur gravida bibendum, augue est egestas risus, eget rhoncus arcu dui vehicula ex. Suspendisse potenti. Curabitur in ultricies lorem. Etiam ullamcorper tortor ut lacus porttitor, quis tempus dui suscipit. Donec quis ex nec metus varius gravida. Fusce bibendum sagittis fringilla. Vestibulum ante felis, aliquam quis nulla at, ullamcorper finibus massa. Nunc eget dictum nisi. Ut sagittis efficitur mauris et maximus. Aenean pulvinar dui at turpis fermentum fermentum. Nam sed quam tellus. Cras sit amet elit non massa viverra tristique ut eu augue. Cras laoreet in metus quis fringilla. Fusce sapien lorem, porttitor vel eleifend non, gravida id libero. Praesent hendrerit rutrum volutpat. Phasellus ut suscipit quam, et dapibus turpis. Proin a sapien erat. Maecenas sollicitudin sollicitudin enim vel mollis. Donec ac porta nulla. Nullam eget elit ut lacus commodo eleifend. Maecenas vel sollicitudin lorem."
  };
  $scope.card.title = 'Overview';
  $scope.otherTitle = 'Details';
  $scope.card.showOverview = true;
  
  // Swap the title and the button text
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
