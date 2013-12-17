'use strict';

angular.module('newClientApp')
	.service('cordovaGreater', function cordovaGreater($rootScope, cordovaReady) {
		return {
			sayReady: cordovaReady(
				function greet() {
					var parentElement = document.getElementById('deviceready');
					var listeningElement = parentElement.querySelector('.listening');
					var receivedElement = parentElement.querySelector('.received');

					listeningElement.setAttribute('style', 'display:none;');
					receivedElement.setAttribute('style', 'display:block;');

					console.log('Received Ready Event!');
				})
		};
	});