'use strict';

/**
 * @ngdoc overview
 * @name mediosApp
 * @description
 * # mediosApp
 *
 * Main module of the application.
 */
var app = angular
	.module('mediosApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ngMaterial',
		 'ui.router',
	]);
app.config(function ($stateProvider, $mdIconProvider, $mdThemingProvider,  $urlRouterProvider) {
		
			$stateProvider
				.state('base', {
					abstract: true,
					url: '',
					templateUrl: 'views/base.html'
				})
				.state('login', {
				  url: '/login',
				  parent: 'base',
				  templateUrl: 'views/login.html',
				  controller: 'MainCtrl'
				})
				.state('dashboard',{
					url: '/dashboard',
					parent: 'base',
					templateUrl: 'views/home.html',
					controller: 'MainCtrl',
				})
				.state('client',{
					url: '/client',
					parent: 'dashboard',
					templateUrl: 'views/createClient.html',
					controller: 'ClientCtrl',
					data: {
						title: "Client"
					}
				})
				.state('about',{
					url: '/about/:title',
					parent: 'dashboard',
					templateUrl: 'views/about.html',
					controller: 'ClientCtrl',
					data: {
						title: "About 2"
					}
				});


				$urlRouterProvider.when('/dashboard', '/dashboard/client');
    $urlRouterProvider.otherwise('/login');
		


			/*MATERIAL*/
			$mdIconProvider
				.defaultIconSet('images/icons/mdi.svg');

			$mdThemingProvider.theme('default')
				.primaryPalette('green');

	});
/*app.run(['$rootScope', '$location', 'Auth' , 
	function($rootScope, $location, Auth){


		$rootScope.$on("$routeChangeStart", 
			function(event, next, current){
				if (next.$$route.authenticated) {
					if (!Auth.getAuthStatus()) {
						$location.path('/');
					}
				}

				if (next.$$route.originalPath == '/') {
					if (Auth.getAuthStatus()) {
						$location.path(current.$$route.originalPath);
					}
				}


		});
}])*/