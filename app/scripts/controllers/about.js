'use strict';

/**
 * @ngdoc function
 * @name mediosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mediosApp
 */
angular.module('mediosApp')
  .controller('AboutCtrl', ['$rootScope','$state', '$scope',function ($rootScope,$state, $scope) {
   $rootScope.title = $state.current.data.title;
   this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
