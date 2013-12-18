'use strict';

angular.module('cordova')
	.service('cordovaBluetooth', ['cordovaReady',
		function Cordovabluetooth(cordovaReady) {
			return {
				onReady: function onReady(fun) {
					cordovaReady.onDeviceReady(fun);
				}
			};
		}
	]);