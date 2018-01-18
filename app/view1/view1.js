'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ "$scope","ListenerService" , function($scope, ListenerService) {


  $scope.tool = {};

  $scope.$watch('tool.cuttingDirection', function(newValues, oldValues){


   ListenerService.notifyCuttingDirection($scope.tool.cuttingDirection);





  }, true);

}]);