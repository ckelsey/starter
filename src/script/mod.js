(function(starter) {
    starter.directive('starter', function(){
        return {
            restrict: 'E',
            templateUrl: '../html/mod.html',
            link: function(scope,elm,attrs){}
        };
    });
})(angular.module('starter', []));
