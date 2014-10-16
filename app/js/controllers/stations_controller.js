angular.module("app").controller('StationsController', function($scope, $http) {
  $scope.title = "Stations";
  $scope.message = "Mouse Over these images to see a directive at work";
  $scope.numbers = [1, 2, 3, 4];

  function handleStations(data) {
    $scope.stations = data;
  }

  function handleDepartures(data) {
    console.log(data, 'What now?');
  }

  $http.get('/stations').success(handleStations);
});
