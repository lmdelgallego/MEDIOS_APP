'use strict'

angular.module('mediosApp').
factory('ClientService', ['$resource', function($resource){
	return $resource("http://localhost:8000/clients/:id", {id: "@id"});
}]);
