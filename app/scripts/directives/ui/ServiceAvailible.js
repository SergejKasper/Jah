'use strict';

angular.module('ui')
  .directive('uiServiceAvailible', ['cordovaReady',
    function(cordovaReady) {
      return {
        template: '<div class=".service-ready blink"><p class="event listening">Connecting to Device</p><p class="event received">Device is Ready</p></div>',
        restrict: 'A',
        controller: ['$scope',
          function($scope) {
            $scope.ready = false;
            $scope.ready = cordovaReady(function() {
              return true;
            });
          }
        ],
        link: function postLink(scope, element, attrs) {
          var modals = angular.element(element).find('p');
          var listeningElement = modals[0];
          var receivedElement = modals[1];
          scope.$watch('ready', function(newValue, oldValue, scope) {
            if (newValue) {
              listeningElement.setAttribute('style', 'display:none;');
              receivedElement.setAttribute('style', 'display:block;');
              console.log('Received Event ready!');
            } else {
              listeningElement.setAttribute('style', 'display:block;');
              receivedElement.setAttribute('style', 'display:none;');
            }

          });
        }
      };
    }
  ]);