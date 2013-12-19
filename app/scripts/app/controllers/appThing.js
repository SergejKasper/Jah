'use strict';

angular.module('app')
	.controller('appThing',['$scope', '$routeParams', function($scope, $routeParams) {
		$scope.awesomeThing = $routeParams.name;
	}]);