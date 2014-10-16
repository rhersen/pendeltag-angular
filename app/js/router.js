angular.module("app").config(function($routeProvider, $locationProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/stations', {
    templateUrl: 'stations.html',
    controller: 'StationsController'
  });

  $routeProvider.when('/departures/:siteid', {
    templateUrl: 'departures.html',
    controller: 'DeparturesController'
  });

  $routeProvider.when('/$resource/list-of-books', {
    templateUrl: 'books_resource.html',
    controller: 'BooksResourceController'
  });

  $routeProvider.when('/$http/list-of-books', {
    templateUrl: 'books_http.html',
    controller: 'BooksHttpController',
    resolve: {
      books: function(BookService) {
        return BookService.getBooks();
      }
    }
  });

  $routeProvider.otherwise({ redirectTo: '/stations' });

});
