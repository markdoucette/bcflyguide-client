'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'app.home',
  'app.about',
  'app.house'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .otherwise({redirectTo: '/home'});
}]);
