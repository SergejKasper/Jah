'use strict';

angular.module('app')
	.controller('appMain', ['$scope',
		function($scope){
			$scope.welcome = 'I\'m a seed project combining Angular, jQueryMobile and PhoneGap with Angular-JQM.';
		}
	]);