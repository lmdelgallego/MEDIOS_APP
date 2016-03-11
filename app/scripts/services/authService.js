'use strict';
/*REST-ANGULAR. INTERCEPCION DE ERRORES.*/
/**
 * @ngdoc function
 * @name mediosApp.service:Auth
 * @description
 * # Auth
 * service of the mediosApp
 */
angular.module('mediosApp').
factory('Auth', ['$http','$cookies', function($http,$cookies){

	var authFactory = {};

	authFactory.login = function (email, password) {
		return $http.post('http://localhost:8000/auth',{
			email: email,
			password: password
		})
		.success(function (response) {
			
			console.log(response);
			$cookies.put('auth', JSON.stringify(response));
			return response;
		})
		.error(function(data) {
			alert(data)
		});
	}

	authFactory.logout = function () {
		AuthToken.setToken();
	}

	authFactory.getAuthStatus = function () {
		var status = $cookies.get('auth');
		if (status) {
			return true;
		}else{
			return false;
		}
	}

	authFactory.getUser = function () {
		if(AuthToken.getToken())
			return $http.get('/api/me');
		else
			return $q.reject({ message: "User has no token"});

	}

	return authFactory;
}])
/**
 * @ngdoc function
 * @name mediosApp.service:AuthToken
 * @description
 * # AuthToken
 * service of the mediosApp
 */
.factory('AuthToken', ['$window', function($window){

	var authTokenFactory = {}

	authTokenFactory.getToken = function(){
		return $window.localStorage.getItem('token');
	}

	authTokenFactory.setToken = function(token){
		if(token)
			$window.localStorage.setItem('token',token);
		else
			$window.localStorage.removeItem('token');
	}

	return authTokenFactory;

}])
.factory('AuthInterceptor', ['$location','$q','AuthToken', function($location,$q, AuthToken){
	interceptorFactory = {}

	interceptorFactory.request = function(config){
		var token = AuthToken.getToken();

		if (token) {
			config.headers['x-access-token'] = token
		}

		return config;
	}

	interceptorFactory.responseError = function(response){

		if (response.status == 403)
			$location.path('/login');
		return $q.reject(response);
	}


	return interceptorFactory;


}])
