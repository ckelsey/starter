'use strict';
angular.module('app', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
	'starter'
])
.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "/demo.html",
        controller: 'AppCtlr'
    })
    .otherwise({ redirectTo: '/' });
}])
.controller('AppCtlr', function(){

});
