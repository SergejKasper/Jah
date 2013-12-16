'use strict';

angular.module('newClientApp')
	.controller('ThingCtrl', function($scope, $routeParams) {
		$scope.awesomeThing = $routeParams.name;
		$scope.act = function act() {
			alert('Build with love!');
		};
	});