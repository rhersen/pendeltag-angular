angular.module("app").controller('HomeController', function($scope, $http) {
  $scope.title = "Home";
  $scope.message = "Mouse Over these images to see a directive at work";
  $scope.numbers = [1, 2, 3, 4];

  $scope.logout = function() {
    console.log('clicked');
    $http.get('/stations').success(function(data) {
      console.log('data received');
    });
  };
});
