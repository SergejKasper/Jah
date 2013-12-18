'use strict';

angular.module('App')
	.controller('MainCtrl', ['$scope',
		function($scope){
			$scope.welcome = 'I\'m a seed project combining Angular, jQueryMobile and PhoneGap with Angular-JQM.';
		}
	]);