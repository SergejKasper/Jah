'use strict';

angular.module('newClientApp')
  .controller('MainCtrl', function ($scope, cordovaGreater) {
    cordovaGreater.sayReady();
  });
