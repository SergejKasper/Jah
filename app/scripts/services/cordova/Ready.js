'use strict';
/*
This Code is buffering events, which are specific to cordova, until the "DeviceReady" Event is fired by cordova. 
It has been created free of license by Brain Ford and is accessible at http://briantford.com/blog/angular-phonegap.html
*/

angular.module('cordova')
	.service('cordovaReady', function cordovaReady() {
		return function(fn) {

			var queue = [];

			var impl = function() {
				queue.push(Array.prototype.slice.call(arguments));
			};

			document.addEventListener('deviceready', function() {
				queue.forEach(function(args) {
					fn.apply(this, args);
				});
				impl = fn;
			}, false);

			return function() {
				return impl.apply(this, arguments);
			};
		};
	});