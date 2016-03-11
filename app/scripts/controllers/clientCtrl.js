'use strict';

/**
 * @ngdoc function
 * @name mediosApp.controller:clientCtrl
 * @description
 * # clientCtrl
 * Controller of the mediosApp
 */
angular.module('mediosApp').
controller('ClientCtrl', ['$rootScope','$state','$scope','ClientService', function($rootScope,$state,$scope,ClientService){

	$rootScope.title = $state.current.data.title;

	$scope.title = "Crear cliente";
	$scope.button = "Guardar";
	$scope.client = {};

	$scope.saveClient =function(){
		console.log($scope.client);
		ClientService.save($scope.client);
	};
}]);
