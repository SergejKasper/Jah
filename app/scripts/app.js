'use strict';

angular.module('App', ['jqm',
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'cordova',
  'ui'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        animation: 'page-slide'
      })
      .when('/:name', {
        templateUrl: 'views/thing.html',
        controller: 'ThingCtrl',
        animation: 'page-slide'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', function ($rootScope) {
    $rootScope.awesomeThings = [
      {name: 'HTML5 Boilerplate', pic: 'styles/images/fw/html5.png'},
      {name: 'JQuery Mobile', pic: 'styles/images/fw/angularjs.png'},
      {name: 'AngularJS', pic: 'styles/images/fw/jquerymobile.png'},
      {name: 'Cordova', pic: 'styles/images/logo.png'}
    ];
  }]);
