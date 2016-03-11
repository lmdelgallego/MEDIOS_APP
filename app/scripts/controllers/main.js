'use strict';

/**
 * @ngdoc function
 * @name mediosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mediosApp
 */
angular.module('mediosApp')
.controller('MainCtrl', ['$rootScope','$scope','$mdSidenav','Auth','$location','$state','$stateParams', 
  function($rootScope,$scope, $mdSidenav, Auth, $location, $state, $stateParams){
 
 $scope.loginParams = {};   
  $scope.toogleLeftMenu = function() {
    $mdSidenav('left').toggle();
    //console.log($state);

  };

  /*LOGIN*/
  $scope.doLogin = function(){
    Auth.login($scope.loginParams.email,$scope.loginParams.password)
      .success(function (response) {
        	$location.path('/dashboard');
		})
		.error(function(data, status, headers){
				alert(data);
		});
  };

}]);