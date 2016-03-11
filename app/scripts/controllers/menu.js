'use strict';

/**
 * @ngdoc function
 * @name mediosApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the mediosApp
 */
angular.module('mediosApp')
  .controller('MenuCtrl', function ($scope, $mdSidenav) {
  
    $scope.openLeftMenu = function() {
	    $mdSidenav('left').toggle();
	  };
    
  });