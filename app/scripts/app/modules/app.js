'use strict';

angular.module('app', ['jqm',
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'cordova',
  'cordovaUi'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'appMain',
        animation: 'page-slide'
      })
      .when('/:name', {
        templateUrl: 'views/thing.html',
        controller: 'appThing',
        animation: 'page-slide'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]).run(['$rootScope', function ($rootScope) {
    $rootScope.awesomeThings = [
      {name: 'HTML5 Boilerplate', pic: 'styles/images/fw/html5.png'},
      {name: 'JQuery Mobile', pic: 'styles/images/fw/angularjs.png'},
      {name: 'AngularJS', pic: 'styles/images/fw/jquerymobile.png'},
      {name: 'Cordova', pic: 'styles/images/logo.png'}
    ];
  }]);
