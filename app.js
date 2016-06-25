'use strict';
angular.module('app', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
	'starter'
])
.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl: "/demo.html",
		controller: 'AppCtlr',
	})
	.otherwise({ redirectTo: '/' });
})
.directive('navigation', function(){
	return {
		restrict: 'E',
		templateUrl: 'src/html/navigation.html'
	};
})
.controller('AppCtlr', function(){

});
