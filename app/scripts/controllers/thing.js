'use strict';

angular.module('App')
	.controller('ThingCtrl',['$scope', '$routeParams', function($scope, $routeParams) {
		$scope.awesomeThing = $routeParams.name;
	}]);