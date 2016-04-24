'use strict'

angular.module('app.house', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/house', {
		templateUrl: 'house/house.html',
		controller: 'HouseCtrl'
	});
}])

.controller('HouseCtrl', [function() {
	angular.element(document.getElementById('topNavBar')).addClass('navbar-solid');
}]);

	
