'use strict';

angular.module('newClientApp', ['jqm',
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:name', {
        templateUrl: 'views/thing.html',
        controller: 'ThingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
