'use strict';

angular.module('app.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/about', {
		templateUrl: 'about/about.html',
		controller: 'AboutCtrl'
	});
}])

.controller('AboutCtrl', [function() {
	angular.element(document.getElementById('topNavBar')).addClass('navbar-solid');
}]);