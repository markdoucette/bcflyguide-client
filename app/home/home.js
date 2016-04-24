'use strict';

angular.module('app.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {

	var topNavBarEl = angular.element(document.getElementById('topNavBar'));
	var solidCss = 'navbar-solid';
	if (topNavBarEl.hasClass(solidCss)) {
		topNavBarEl.removeClass(solidCss);
	}
}]);